using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Web;
using System.Web.Mvc;
using OneOff.Data;
using OneOff.Data.Entities.cs;
using Microsoft.AspNet.Identity;
using OneOff.Services;
using OneOff.Models.ViewModels;

namespace OneOff.Web.MVC.Controllers
{
    public class GigsController : Controller
    {

        // GET: Gigs
        public ActionResult Index()
        {
            var userId = Guid.Parse(User.Identity.GetUserId());
            var service = new GigService(userId);
            var model = service.GetGigs();
            return View(model);
        }

        // GET: Gigs/Details/5
        public ActionResult Details(int id)
        {
            var service = CreateGigService();
            var model = service.GetGigById(id);

            return View(model);
        }

        // GET: Gigs/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Gigs/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(GigViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            var service = CreateGigService();

            if (service.CreateGig(model))
            {
                return RedirectToAction("Index");
            }

            ModelState.AddModelError("", "Gig could not be created");
            return View(model);
        }

        // GET: Gigs/Edit/5
        public ActionResult Edit(int id)
        {
            var service = CreateGigService();
            var detail = service.GetGigById(id);

            var model = new GigEditViewModel
            {
                GigId = detail.GigId,
                VenueName = detail.VenueName,
                Date = detail.Date,
                City = detail.City,
                State = detail.State,
                Zip = detail.Zip
            };

            return View(model);
        }

        // POST: Gigs/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, GigEditViewModel model)
        {
            if (!ModelState.IsValid) return View(model);

            if (model.GigId != id)
            {
                ModelState.AddModelError("", "Id Mismatch");
                return View(model);
            }

            var service = CreateGigService();

            if (service.UpdateGig(model))
            {
                return RedirectToAction("Index");
            }

            ModelState.AddModelError("", "Your gig could not be updated.");

            return View(model);
        }

        // GET: Gigs/Delete/5
        public ActionResult Delete(int id)
        {
            var service = CreateGigService();
            var model = service.GetGigById(id);

            return View(model);
        }

        // POST: Gigs/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeletePost(int id)
        {
            var service = CreateGigService();
            service.DeleteGig(id);

            return RedirectToAction("Index");
        }

        private GigService CreateGigService()
        {
            var userId = Guid.Parse(User.Identity.GetUserId());
            var service = new GigService(userId);
            return service;
        }
    }
}

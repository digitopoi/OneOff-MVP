using Microsoft.AspNet.Identity;
using OneOff.Models.ViewModels;
using OneOff.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace OneOff.API.Controllers
{
    [Authorize]
    public class GigController : ApiController
    {
        public IHttpActionResult Get()
        {
            var gigService = CreateGigService();

            var gigs = gigService.GetGigs();

            return Ok(gigs);
        }

        public IHttpActionResult Get(int id)
        {
            var gigService = CreateGigService();

            var gig = gigService.GetGigById(id);

            return Ok(gig);
        }

        public IHttpActionResult Post(GigViewModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var service = CreateGigService();

            if (!service.CreateGig(model))
                return InternalServerError();

            return Ok();
        }

        public IHttpActionResult Put(GigEditViewModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var service = CreateGigService();

            if (!service.UpdateGig(model))
                return InternalServerError();

            return Ok();
        }

        public IHttpActionResult Delete(int id)
        {
            var service = CreateGigService();

            if (!service.DeleteGig(id))
                return InternalServerError();

            return Ok();
        }

        private GigService CreateGigService()
        {
            var userId = Guid.Parse(User.Identity.GetUserId());
            var gigService = new GigService(userId);
            return gigService;
        }
    }
}

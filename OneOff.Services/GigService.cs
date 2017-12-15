using OneOff.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OneOff.Models.ViewModels;
using OneOff.Data.Entities.cs;
using OneOff.Data;
using System.Data.Entity;

namespace OneOff.Services
{
    public class GigService : IGigService
    {
        private readonly Guid _userId;

        public GigService(Guid userId)
        {
            _userId = userId;
        }

        public bool CreateGig(GigViewModel model)
        {
            var entity = new GigEntity()
            {
                OwnerId = _userId,
                VenueName = model.VenueName,
                Date = model.Date,
                City = model.City,
                State = model.State,
                Zip = model.Zip
            };

            using (var context = new ApplicationDbContext())
            {
                context.Gigs.Add(entity);
                return context.SaveChanges() == 1;
            }
        }

        public bool DeleteGig(int gigId)
        {
            using (var context = new ApplicationDbContext())
            {
                var entity = context
                                    .Gigs
                                    .Where(e => e.GigId == gigId && e.OwnerId == _userId)
                                    .FirstOrDefault();

                context.Gigs.Remove(entity);
                return context.SaveChanges() == 1;
            }
        }

        public GigEditViewModel GetGigById(int gigId)
        {
            using (var context = new ApplicationDbContext())
            {
                var entity = context
                                    .Gigs
                                    .Single(e => e.GigId == gigId && e.OwnerId == _userId);

                var gig = new GigEditViewModel
                {
                    GigId = entity.GigId,
                    VenueName = entity.VenueName,
                    Date = entity.Date,
                    City = entity.City,
                    State = entity.State,
                    Zip = entity.Zip,
                };

                return gig;
            }
        }

        public IEnumerable<GigEditViewModel> GetGigs()
        {
            using (var context = new ApplicationDbContext())
            {
                var query =  context
                                .Gigs
                                .Where(e => e.OwnerId == _userId)
                                .Select(e => new GigEditViewModel
                                {
                                    GigId = e.GigId,
                                    VenueName = e.VenueName,
                                    Date = e.Date,
                                    City = e.City,
                                    State = e.State,
                                    Zip = e.Zip
                                });

                return query.ToArray();
                       
            }
        }

        public bool UpdateGig(GigEditViewModel model)
        {
            using (var context = new ApplicationDbContext())
            {
                var entity = context
                                .Gigs
                                .FirstOrDefault(e => e.GigId == model.GigId && e.OwnerId == _userId);

                entity.VenueName = model.VenueName;
                entity.Date = model.Date;
                entity.City = model.City;
                entity.State = model.State;
                entity.Zip = model.Zip;

                return context.SaveChanges() == 1;
            }
        }
    }
}

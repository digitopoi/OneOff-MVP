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

        public async Task<bool> CreateGigAsync(GigEditViewModel model)
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
                return await context.SaveChangesAsync() == 1;
            }
        }

        public async Task<bool> DeleteGigAsync(int gigId)
        {
            using (var context = new ApplicationDbContext())
            {
                var entity = await context
                                        .Gigs
                                        .Where(e => e.GigId == gigId && e.OwnerId == _userId)
                                        .FirstOrDefaultAsync();

                context.Gigs.Remove(entity);
                return await context.SaveChangesAsync() == 1;
            }
        }

        public async Task<GigEditViewModel> GetGigByIdAsync(int gigId)
        {
            using (var context = new ApplicationDbContext())
            {
                var entity = await context
                                        .Gigs
                                        .SingleAsync(e => e.GigId == gigId && e.OwnerId == _userId);

                var userGig = new GigEditViewModel
                {
                    VenueName = entity.VenueName,
                    Date = entity.Date,
                    City = entity.City,
                    State = entity.State,
                    Zip = entity.Zip,
                };

                return userGig;
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

        public async Task<bool> UpdateGigAsync(GigEditViewModel model)
        {
            using (var context = new ApplicationDbContext())
            {
                var entity = await context
                                    .Gigs
                                    .FirstOrDefaultAsync(e => e.GigId == model.GigId && e.OwnerId == _userId);

                entity.VenueName = model.VenueName;
                entity.Date = model.Date;
                entity.City = model.City;
                entity.State = model.State;
                entity.Zip = model.Zip;

                return await context.SaveChangesAsync() == 1;
            }
        }
    }
}

using OneOff.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OneOff.Contracts
{
    public interface IGigService
    {
        bool CreateGig(GigViewModel model);
        IEnumerable<GigEditViewModel> GetGigs();
        GigEditViewModel GetGigById(int gigId);
        bool UpdateGig(GigEditViewModel model);
        bool DeleteGig(int gigId);
    }
}

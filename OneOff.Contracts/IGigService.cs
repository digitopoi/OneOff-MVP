﻿using OneOff.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OneOff.Contracts
{
    public interface IGigService
    {
        Task<bool> CreateGigAsync(GigViewModel model);
        IEnumerable<GigViewModel> GetGigs();
        Task<GigViewModel> GetGigByIdAsync(int gigId);
        Task<bool> UpdateGigAsync(GigEditViewModel model);
        Task<bool> DeleteGigAsync(int gigId);
    }
}

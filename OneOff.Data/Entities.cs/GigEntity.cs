using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OneOff.Data.Entities.cs
{
    public class GigEntity
    {
        [Key]
        public int GigId { get; set; }

        [Required]
        public Guid OwnerId { get; set; }

        [Required]
        public string VenueName { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string State { get; set; }

        [Required]
        public string Zip { get; set; }
    }
}

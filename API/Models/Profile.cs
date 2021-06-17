using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Wellnest_API.Models
{
    public class Profile
    {
        public int ProfileId { get; set; }
        public DateTime dateOfBirth { get; set; }
        public string bloodType { get; set; }
        public string alergies { get; set; }
        public string vaccination { get; set; }
        public string Photo { get; set; }
    }


}

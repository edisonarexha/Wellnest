using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Wellnest_API.Models
{
    public class Covid19
    {
        public int covidID { get; set; }
        public string CountryName { get; set; }
        public int Cases { get; set; }
        public int Recoveries { get; set; }
        public int deaths { get; set; }

    }
}

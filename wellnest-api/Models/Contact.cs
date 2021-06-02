using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Wellnest_API.Models
{
    public class Contact
    {
        public int UsersID { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Wellnest_API.Models
{
    public class Users
    {
        public int UserID { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }

        public string Password { get; set; }
        public string Role { get; set; }
    
}
}

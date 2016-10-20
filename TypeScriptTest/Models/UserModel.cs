using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TypeScriptTest.Models
{
    public class UserModel
    {
        public int Id { get; set; }
        public DateTime? BirthDate { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
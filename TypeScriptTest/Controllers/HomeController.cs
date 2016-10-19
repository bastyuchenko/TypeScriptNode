using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TypeScriptTest.Models;

namespace TypeScriptTest.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetUsers()
        {
            List<User> userCollection = new List<User>()
            {
                new User() { Id=1,LastName="Bastiuchenko", FirstName="Anton", BirthDate=new DateTime(1986,5,17) },
                new User() { Id=2,LastName="Kryzhovets", FirstName="Nata", BirthDate=new DateTime(1990,1,8) },
                new User() { Id=3,LastName="Siam", FirstName="Pumka", BirthDate=new DateTime(2011,6,20) },
            };

            return Json(userCollection, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetGroup()
        {
            List<Group> userCollection = new List<Group>()
            {
                new Group() { Id=1,Name="Vossoedinenia" },
                new Group() { Id=2,Name="SholomAleihem" },
            };

            return Json(userCollection, JsonRequestBehavior.AllowGet);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
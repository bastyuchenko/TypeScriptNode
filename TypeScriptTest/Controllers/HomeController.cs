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
                new User() { Id=1, Name="Anton", Age=30 },
                new User() { Id=2, Name="Nata", Age=26 },
                new User() { Id=3, Name="Pumka", Age=5 },
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
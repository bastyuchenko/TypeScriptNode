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
            List<UserModel> userCollection = null;
            using (var context = new TypeScriptDBEntities())
            {
                userCollection = (from g in context.Users
                                  select new UserModel()
                                  {
                                      Id = g.ID,
                                      BirthDate = g.BirthDate,
                                      FirstName = g.FirstName,
                                      LastName = g.LastName
                                  }).ToList();
            }
            return Json(userCollection, JsonRequestBehavior.AllowGet);
        }

        public bool PostUser(User user)
        {
            using (var context = new TypeScriptDBEntities())
            {
                context.Users.Add(user);
                context.SaveChanges();
            }
            return true;
        }

        public JsonResult GetGroup()
        {
            List<GroupModel> groupCollection = null;
            using (var context = new TypeScriptDBEntities())
            {
                groupCollection = (from g in context.Groups
                                   select new GroupModel()
                                   {
                                       Id = g.ID,
                                       Name = g.Title
                                   }).ToList();
            }
            return Json(groupCollection, JsonRequestBehavior.AllowGet);
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
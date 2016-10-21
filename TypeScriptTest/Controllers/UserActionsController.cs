using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TypeScriptTest.Models;

namespace TypeScriptTest.Controllers
{
    public class UserActionsController : ApiController
    {
        public OperationResult<List<UserModel>> GetUsers()
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
            return new OperationResult<List<UserModel>>()
            {
                Success = true,
                Result = userCollection
            };
        }

        public OperationResult PostUser(User user)
        {
            try
            {
                using (var context = new TypeScriptDBEntities())
                {
                    context.Users.Add(user);
                    context.SaveChanges();
                }

                return new OperationResult() { Success = true, Message="yeah" };
            }
            catch (Exception ex)
            {
                return new OperationResult() { Success = false, Message = ex.Message };
            }

        }
    }
}

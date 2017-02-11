using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AspNetCoreSPA.BLL;

namespace AspNetCoreSPA.Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly IHomeBLL _homeBLL;

        public HomeController(IHomeBLL homeBLL)
        {
            _homeBLL = homeBLL;
        }

        // GET: Application entry point
        public IActionResult Index()
        {
            return View("index");
        }

        // GET: api/Home
        [HttpGet]
        public IActionResult Get()
        {
            return Json(_homeBLL.GetAll());
        }

        // GET: api/Home/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Json("value" + id);
        }

        // POST: api/Home
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Home/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

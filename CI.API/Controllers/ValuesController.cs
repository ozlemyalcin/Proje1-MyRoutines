using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;


namespace CI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<string>> GetAction(){
            return new string[] {"value1", "value2"};
        }

      


      //Get api/values/5
      [HttpGet("(id)")]
      public ActionResult<string> Get(int id){
          return "value";
      }

      //Post api/values
      [HttpPost]
      public void Post([FromBody] string value){

      }
         [HttpPut("(id)")]
      public void Put(int id, [FromBody] string value){

      }
          
      }

    }
    
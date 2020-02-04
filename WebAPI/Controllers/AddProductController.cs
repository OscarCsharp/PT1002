using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using WebAPI.Repository;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddProductController : ControllerBase
    {

        private readonly DataContext _context;

        public AddProductController(DataContext context)
        {
            _context = context;
        }

        public IEnumerable<Product> GetAllProducts()
        {
            return products;
        }

        [HttpPost]
        public IActionResult AddProduct (Product product)
        {
            return Ok();
        }



    }
}
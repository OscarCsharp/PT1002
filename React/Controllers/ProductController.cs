using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using React.DataLayers;
using React.Models;

namespace React.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {

        ProductLayer objproduct = new ProductLayer();

        [HttpGet]
        [Route("api/Product/Index")]
        public IEnumerable<Products> Index()
        {
            return objproduct.GetAllProducts();
        }
        [HttpPost]
        [Route("api/Product/Create")]
        public int Create(Products product)
        {
            return objproduct.AddProduct(product);
        }
        [HttpGet]
        [Route("api/Product/Details/{id}")]
        public Products Details(int id)
        {
            return objproduct.GetProductData(id);
        }
        [HttpPut]
        [Route("api/Product/Edit")]
        public int Edit(Products product)
        {
            return objproduct.UpdateProduct(product);
        }
        [HttpDelete]
        [Route("api/Product/Delete/{id}")]
        public string Delete(int id)
        {
            return objproduct.DeleteProduct(id);
        }
       


    }
}
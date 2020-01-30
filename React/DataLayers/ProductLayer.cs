using Microsoft.EntityFrameworkCore;
using React.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React.DataLayers
{
	public class ProductLayer
	{
        DataContext db = new DataContext();
        
        //Retrieve all products 
        public IEnumerable<Products> GetAllProducts()
        {
            try
            {
                return db.Products.ToList();
            }
            catch
            {
                throw;
            }
        }


        //To Add new record     
        public int AddProduct(Products product)
        {
            try
            {
                db.Products.Add(product);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //To Update the record  
        public int UpdateProduct(Products product)
        {
            try
            {
                db.Entry(product).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular Products  
        public Products GetProductData(int id)
        {
            try
            {
                Products product = db.Products.Find(id);
                return product;
            }
            catch
            {
                throw;
            }
        }
        //To Delete the record of a specific Product   
        public string DeleteProduct(int id)
        {
            try
            {
                Products product = db.Products.Find(id);
                db.Products.Remove(product);
                db.SaveChanges();
                return "Deleted";
            }
            catch
            {
                throw;
            }
        }
       
    }
}

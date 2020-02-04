using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
	public class Product
	{
		[Key]
		public int ProudctID { get; set; }
		public string ProudctName { get; set; }
		public int SupplierID { get; set; }
		public int CategoryID { get; set; }
		public int QuantityPerUnit { get; set; }
		public int UnitPrice { get; set; }
		public int UnitInStock { get; set; }
		public int UnitOnOrder { get; set; }
		public int ReorderLevel { get; set; }
		public string Discontinued { get; set; }


	}
}

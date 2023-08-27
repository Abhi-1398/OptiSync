using System;
using System.Collections.Generic;

namespace Optisync.Models;

public partial class Order
{
    public int OrderId { get; set; }

    public int ClientId { get; set; }

    public int CompanyId { get; set; }

    public int ProductId { get; set; }

    public int ProductQty { get; set; }

    public DateOnly StartDate { get; set; }

    public DateOnly EndDate { get; set; }

    public int DispatchQty { get; set; }

    public virtual ICollection<Assembly> Assemblies { get; set; } = new List<Assembly>();

    public virtual Client Client { get; set; } = null!;

    public virtual Company Company { get; set; } = null!;

    public virtual ICollection<Dispatch> Dispatches { get; set; } = new List<Dispatch>();

    public virtual Product Product { get; set; } = null!;

    public virtual ICollection<Production> Productions { get; set; } = new List<Production>();

    public virtual ICollection<Store> Stores { get; set; } = new List<Store>();
}

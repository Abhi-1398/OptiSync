using System;
using System.Collections.Generic;

namespace Optisync.Models;

public partial class RawMaterial
{
    public int RawMaterialId { get; set; }

    public string? Name { get; set; }

    public string? Description { get; set; }

    public int PartId { get; set; }

    public virtual Part Part { get; set; } = null!;

    public virtual ICollection<Production> Productions { get; set; } = new List<Production>();

    public virtual ICollection<Stock> Stocks { get; set; } = new List<Stock>();

    public virtual ICollection<Store> Stores { get; set; } = new List<Store>();
}

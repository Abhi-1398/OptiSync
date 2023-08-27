using System;
using System.Collections.Generic;

namespace Optisync.Models;

public partial class Part
{
    public int PartId { get; set; }

    public string? PartName { get; set; }

    public string? PartDescription { get; set; }

    public int ProductId { get; set; }

    public virtual ICollection<Assembly> Assemblies { get; set; } = new List<Assembly>();

    public virtual ICollection<Cpm> Cpms { get; set; } = new List<Cpm>();

    public virtual Product Product { get; set; } = null!;

    public virtual ICollection<RawMaterial> RawMaterials { get; set; } = new List<RawMaterial>();

    public virtual ICollection<Stock> Stocks { get; set; } = new List<Stock>();

    public virtual ICollection<Store> Stores { get; set; } = new List<Store>();
}

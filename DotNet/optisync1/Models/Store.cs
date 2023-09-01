using System;
using System.Collections.Generic;

namespace optisync1.Models;

public partial class Store
{
    public int StoreEntryNo { get; set; }

    public DateOnly? StoreDate { get; set; }

    public int? OrderId { get; set; }

    public int? RawMaterialId { get; set; }

    public int? RawMaterialQty { get; set; }

    public int? ForwardId { get; set; }

    public int? PartId { get; set; }

    public int? PartQty { get; set; }

    public virtual Forward? Forward { get; set; }

    public virtual Order? Order { get; set; }

    public virtual Part? Part { get; set; }

    public virtual RawMaterial? RawMaterial { get; set; }
}

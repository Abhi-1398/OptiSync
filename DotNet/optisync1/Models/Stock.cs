using System;
using System.Collections.Generic;

namespace optisync1.Models;

public partial class Stock
{
    public int StockEntryNo { get; set; }

    public DateTime? StockDate { get; set; }

    public int? RawMaterialId { get; set; }

    public int? RawMaterialQty { get; set; }

    public int? FinalRawMaterialQty { get; set; }

    public int? PartId { get; set; }

    public int? PartQty { get; set; }

    public int? FinalPartQty { get; set; }

    public int? CompanyId { get; set; }

    public virtual Company? Company { get; set; }

    public virtual Part? Part { get; set; }

    public virtual RawMaterial? RawMaterial { get; set; }
}

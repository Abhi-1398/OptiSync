using System;
using System.Collections.Generic;

namespace optisync1.Models;

public partial class Cpm
{
    public int CpmId { get; set; }

    public int CompanyId { get; set; }

    public int ProductId { get; set; }

    public int PartId { get; set; }

    public int StoreCt { get; set; }

    public int ProductionCt { get; set; }

    public int VendorCt { get; set; }

    public int AssemblyCt { get; set; }

    public int DispatchCt { get; set; }

    public virtual Company Company { get; set; } = null!;

    public virtual Part Part { get; set; } = null!;

    public virtual Product Product { get; set; } = null!;
}

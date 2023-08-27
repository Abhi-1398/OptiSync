using System;
using System.Collections.Generic;

namespace Optisync.Models;

public partial class Vendormap
{
    public int VendorId { get; set; }

    public int CompanyId { get; set; }

    public int VendormapId { get; set; }

    public int PartId { get; set; }

    public virtual Company Company { get; set; } = null!;

    public virtual MasterVendor Vendor { get; set; } = null!;
}

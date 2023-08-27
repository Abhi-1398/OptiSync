using System;
using System.Collections.Generic;

namespace Optisync.Models;

public partial class MasterVendor
{
    public int MasterVendorId { get; set; }

    public string? MasterVendorName { get; set; }

    public string? MasterVendorPartName { get; set; }

    public virtual ICollection<Vendormap> Vendormaps { get; set; } = new List<Vendormap>();
}

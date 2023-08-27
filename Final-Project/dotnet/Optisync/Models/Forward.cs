using System;
using System.Collections.Generic;

namespace Optisync.Models;

public partial class Forward
{
    public int ForwardId { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<Store> Stores { get; set; } = new List<Store>();
}

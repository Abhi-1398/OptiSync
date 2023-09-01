using System;
using System.Collections.Generic;

namespace optisync1.Models;

public partial class Client
{
    public int ClientId { get; set; }

    public string? ClientName { get; set; }

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();
}

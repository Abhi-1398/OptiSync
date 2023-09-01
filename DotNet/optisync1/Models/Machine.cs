using System;
using System.Collections.Generic;

namespace optisync1.Models;

public partial class Machine
{
    public int MachineId { get; set; }

    public string? MachineName { get; set; }

    public string? MachineDescription { get; set; }

    public int CompanyId { get; set; }

    public virtual Company Company { get; set; } = null!;

    public virtual ICollection<Production> Productions { get; set; } = new List<Production>();
}

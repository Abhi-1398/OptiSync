using System;
using System.Collections.Generic;

namespace Optisync.Models;

public partial class Plan
{
    public int PlanId { get; set; }

    public string? PlanName { get; set; }

    public int UserNo { get; set; }

    public int Duration { get; set; }

    public float? Price { get; set; }

    public virtual ICollection<Company> Companies { get; set; } = new List<Company>();
}

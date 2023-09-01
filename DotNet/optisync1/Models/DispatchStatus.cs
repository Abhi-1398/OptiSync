using System;
using System.Collections.Generic;

namespace optisync1.Models;

public partial class DispatchStatus
{
    public int DispatchStatusId { get; set; }

    public string? StatusMeaning { get; set; }

    public virtual ICollection<Dispatch> Dispatches { get; set; } = new List<Dispatch>();
}

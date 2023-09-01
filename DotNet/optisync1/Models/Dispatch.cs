using System;
using System.Collections.Generic;

namespace optisync1.Models;

public partial class Dispatch
{
    public int DispatchEntryNo { get; set; }

    public DateOnly? Date { get; set; }

    public int? OrderId { get; set; }

    public int? ProductId { get; set; }

    public int? ReceivedProductQty { get; set; }

    public int? TagetedValue { get; set; }

    public int? Achieved { get; set; }

    public string? DispatcherName { get; set; }

    public int? DispatchStatus { get; set; }

    public virtual DispatchStatus? DispatchStatusNavigation { get; set; }

    public virtual Order? Order { get; set; }

    public virtual Product? Product { get; set; }
}

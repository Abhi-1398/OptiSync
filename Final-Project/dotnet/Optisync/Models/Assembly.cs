using System;
using System.Collections.Generic;

namespace Optisync.Models;

public partial class Assembly
{
    public int AssemblyEntryNo { get; set; }

    public DateOnly? Date { get; set; }

    public int OrderId { get; set; }

    public int PartId { get; set; }

    public int ReceivedPartQty { get; set; }

    public int TargetedValue { get; set; }

    public int Achieve { get; set; }

    public int? CurrentQty { get; set; }

    public virtual Order Order { get; set; } = null!;

    public virtual Part Part { get; set; } = null!;
}

public class Transaction
{
    public int Id { get; set; }
    public decimal Amount { get; set; }
    public string Type { get; set; }
    public DateTime TransactionDate { get; set; }

    public override string  ToString() {
        return $"Id: {Id}, Amount: {Amount:C}, Description: {Type}, Date: {TransactionDate:MM/dd/yyyy}";

    }
}
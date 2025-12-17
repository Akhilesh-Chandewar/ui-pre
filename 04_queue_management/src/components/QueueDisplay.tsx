import type { QueueItem } from "../App";

interface QueueDisplayProps {
  queue: QueueItem[];
  onUpdateStatus: (id: number, updatedStatus: QueueItem["status"]) => void;
  onRemove: (id: number) => void;
}

function QueueDisplay({
  queue,
  onUpdateStatus,
  onRemove,
}: QueueDisplayProps) {
  const getStatusColor = (status: QueueItem["status"]): string => {
    switch (status) {
      case "waiting":
        return "var(--warning)";
      case "processing":
        return "var(--success)";
      case "done":
        return "var(--info)";
      default:
        return "var(--text)";
    }
  };

  return (
    <div className="queue-display">
      <h2>Current queue</h2>

      {queue.length === 0 ? (
        <p className="empty-queue">No customer data</p>
      ) : (
        <div className="queue-list">
          {queue.map((customer) => (
            <div className="queue-item" key={customer.id}>
              <div className="customer-info">
                <h3>{customer.name}</h3>
                <p>{customer.service}</p>
                <span
                  className="status"
                  style={{ color: getStatusColor(customer.status) }}
                >
                  {customer.status}
                </span>
              </div>

              <div className="actions">
                {customer.status === "waiting" && (
                  <span
                    className="serve-btn"
                    onClick={() =>
                      onUpdateStatus(customer.id, "processing")
                    }
                  >
                    Process
                  </span>
                )}

                {customer.status === "processing" && (
                  <span
                    className="complete-btn"
                    onClick={() =>
                      onUpdateStatus(customer.id, "done")
                    }
                  >
                    Complete
                  </span>
                )}

                <button
                  className="remove-btn"
                  onClick={() => onRemove(customer.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QueueDisplay;

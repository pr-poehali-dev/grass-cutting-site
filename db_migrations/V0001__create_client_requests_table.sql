CREATE TABLE IF NOT EXISTS client_requests (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'new'
);

CREATE INDEX idx_client_requests_created_at ON client_requests(created_at DESC);
CREATE INDEX idx_client_requests_status ON client_requests(status);
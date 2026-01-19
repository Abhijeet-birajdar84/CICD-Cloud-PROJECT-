const http = require('http');

const htmlPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CI/CD Pipeline Demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
            background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        .card {
            background: #1e293b;
            padding: 30px 40px;
            border-radius: 12px;
            box-shadow: 0 15px 30px rgba(0,0,0,0.4);
            text-align: center;
            max-width: 500px;
        }

        h1 {
            color: #38bdf8;
            margin-bottom: 10px;
        }

        p {
            font-size: 16px;
            line-height: 1.6;
        }

        .status {
            margin: 20px 0;
            padding: 12px;
            background: #022c22;
            border: 1px solid #22c55e;
            color: #22c55e;
            border-radius: 8px;
            font-weight: bold;
        }

        .footer {
            margin-top: 20px;
            font-size: 14px;
            color: #94a3b8;
        }

        .badge {
            display: inline-block;
            margin-top: 10px;
            padding: 6px 12px;
            background: #0ea5e9;
            border-radius: 20px;
            font-size: 13px;
            color: #ffffff;
        }
    </style>
</head>
<body>
    <div class="card">
        <h1>🚀 CI/CD Pipeline Demo</h1>
        <p>
            This application was automatically built and deployed using
            <strong>GitHub, Jenkins, Docker, and Kubernetes</strong>.
        </p>

        <div class="status">
            ✅ Deployment Successful
        </div>

        <span class="badge">Automated CI/CD</span>

        <div class="footer">
            <p>Environment: Production</p>
            <p>Powered by DevOps Pipeline</p>
        </div>
    </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlPage);
});

server.listen(3000, () => {
    console.log('🚀 Server is running on http://localhost:3000');
});

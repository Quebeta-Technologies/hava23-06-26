# How to Run the HAVA Website

This project has two parts that run separately:
- **Frontend** — React app in the `frontend/` folder (runs on port 3000)
- **Backend** — Python FastAPI server in the `backend/` folder (runs on port 8000)

---

## 1. Install prerequisites (one-time setup)

You need these installed on your computer:

| Tool | Version | Download |
|---|---|---|
| Node.js | 18 or higher | https://nodejs.org |
| Yarn | latest | After installing Node, run: `npm install -g yarn` |
| Python | 3.10 or higher | https://www.python.org |
| MongoDB | Community Edition | https://www.mongodb.com/try/download/community |

To check they're all installed, open a terminal and run:
```
node --version
yarn --version
python --version
mongod --version
```

---

## 2. Start MongoDB

MongoDB must be running before you start the backend.

- **Windows:** MongoDB usually runs as a service automatically after installation. To check, open Services and look for "MongoDB Server". If not running, start it.
- **Mac (Homebrew install):** `brew services start mongodb-community`
- **Linux:** `sudo systemctl start mongod`

---

## 3. Start the backend (Terminal 1)

Open a terminal, navigate to the project folder, then:

```
cd backend
python -m venv venv
```

Activate the virtual environment:
- **Windows:** `venv\Scripts\activate`
- **Mac/Linux:** `source venv/bin/activate`

Then install dependencies and start the server:
```
pip install -r requirements.txt
uvicorn server:app --reload --host 0.0.0.0 --port 8000
```

You should see: `Uvicorn running on http://0.0.0.0:8000`

Leave this terminal running. Test it by visiting http://localhost:8000/api/ in your browser — you should see `{"message":"Hello World"}`.

---

## 4. Start the frontend (Terminal 2)

Open a **second** terminal (keep the backend running in the first), then:

```
cd frontend
yarn install
yarn start
```

The browser should automatically open to **http://localhost:3000** showing the HAVA website.

---

## Troubleshooting

### "yarn: command not found"
Run `npm install -g yarn` first.

### Frontend starts but shows network errors / can't reach backend
Make sure the backend is running on port 8000 and `frontend/.env` has:
```
REACT_APP_BACKEND_URL=http://localhost:8000
```

### Backend error: "Failed to connect to MongoDB"
MongoDB is not running. Start it (see step 2).

### `pip install` fails on some package
Make sure you're inside the activated virtual environment (you should see `(venv)` at the start of your terminal prompt). If a specific package fails, copy the error message and search it online, or share it with me.

### Port already in use
Something else is using port 3000 or 8000. Either close that program, or change the port:
- Backend: change `--port 8000` to a different number, and update `REACT_APP_BACKEND_URL` in `frontend/.env` to match.
- Frontend: set `PORT=3001` before `yarn start` (Windows: `set PORT=3001 && yarn start`).

### "node-gyp" or native module errors during `yarn install`
You probably have an old Node.js version. Upgrade to Node 18 or higher.

---

## What was fixed in this version

1. **`frontend/.env`** — Was pointing to a remote preview URL (`page-builder-515.preview.emergentagent.com`) that doesn't work on your machine. Changed to `http://localhost:8000`.
2. **`backend/requirements.txt`** — Removed the `emergentintegrations==0.1.0` package which isn't available on public PyPI and would break `pip install`. Also trimmed unused dependencies (boto3, pandas, numpy, jq, etc.) that the actual `server.py` doesn't import — install is much faster now.
3. **`backend/.env`** — Restricted CORS to `http://localhost:3000` (more secure than `*`) and renamed the database from `test_database` to `hava_database`.
4. **Added convenience scripts** — `start-backend.sh`/`start-backend.bat` and `start-frontend.sh`/`start-frontend.bat` so you can double-click to run after the first-time setup.

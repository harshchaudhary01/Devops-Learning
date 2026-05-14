export const technologies = [
  {
    id: 'docker',
    name: 'Docker',
    tagline: 'Containerize Everything',
    icon: '🐳',
    color: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-500/30',
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-400',
    difficulty: 'Beginner',
    time: '2–3 weeks',
    description: 'Package your applications into portable containers that run consistently anywhere — your laptop, a server, or the cloud.',
    topics: ['Containers', 'Images', 'Dockerfile', 'Docker Compose', 'Volumes', 'Networks'],
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    tagline: 'Orchestrate at Scale',
    icon: '☸️',
    color: 'from-indigo-500 to-blue-500',
    borderColor: 'border-indigo-500/30',
    bgColor: 'bg-indigo-500/10',
    textColor: 'text-indigo-400',
    difficulty: 'Intermediate',
    time: '4–6 weeks',
    description: 'Automatically deploy, scale, and manage containerized applications across clusters of machines.',
    topics: ['Pods', 'Deployments', 'Services', 'Ingress', 'ConfigMaps', 'Helm'],
  },
  {
    id: 'aws',
    name: 'AWS',
    tagline: 'Cloud Infrastructure',
    icon: '☁️',
    color: 'from-orange-500 to-amber-500',
    borderColor: 'border-orange-500/30',
    bgColor: 'bg-orange-500/10',
    textColor: 'text-orange-400',
    difficulty: 'Intermediate',
    time: '6–8 weeks',
    description: 'Build, deploy, and scale applications on the world\'s most comprehensive cloud platform.',
    topics: ['EC2', 'S3', 'VPC', 'IAM', 'Lambda', 'RDS'],
  },
  {
    id: 'terraform',
    name: 'Terraform',
    tagline: 'Infrastructure as Code',
    icon: '🏗️',
    color: 'from-violet-500 to-purple-500',
    borderColor: 'border-violet-500/30',
    bgColor: 'bg-violet-500/10',
    textColor: 'text-violet-400',
    difficulty: 'Intermediate',
    time: '3–4 weeks',
    description: 'Write code to create, update, and version your infrastructure safely and efficiently.',
    topics: ['Providers', 'Resources', 'Variables', 'Modules', 'State', 'Workspaces'],
  },
  {
    id: 'jenkins',
    name: 'Jenkins',
    tagline: 'Automate CI/CD',
    icon: '⚙️',
    color: 'from-red-500 to-rose-500',
    borderColor: 'border-red-500/30',
    bgColor: 'bg-red-500/10',
    textColor: 'text-red-400',
    difficulty: 'Intermediate',
    time: '3–4 weeks',
    description: 'Automate building, testing, and deploying your code with the world\'s most popular CI/CD server.',
    topics: ['Pipelines', 'Jenkinsfile', 'Agents', 'Plugins', 'Webhooks', 'Stages'],
  },
  {
    id: 'prometheus',
    name: 'Prometheus',
    tagline: 'Monitor & Alert',
    icon: '🔥',
    color: 'from-rose-500 to-pink-500',
    borderColor: 'border-rose-500/30',
    bgColor: 'bg-rose-500/10',
    textColor: 'text-rose-400',
    difficulty: 'Advanced',
    time: '2–3 weeks',
    description: 'Collect metrics, set alerts, and visualize your system\'s health with the industry-standard monitoring stack.',
    topics: ['Metrics', 'PromQL', 'Alerting', 'Grafana', 'Exporters', 'Recording Rules'],
  },
];

export const dockerContent = {
  intro: {
    what: `Docker is a tool that packages your application and everything it needs (code, libraries, settings) into a neat, portable box called a **container**. Think of it like a lunchbox 🍱 — you pack your food exactly how you want it at home, and when you open it anywhere (school, office, park), it looks and tastes exactly the same!

Before Docker, developers would say "It works on my machine!" — but the app would break on the server because the server had different software installed. Docker eliminates this problem forever.`,
    why: [
      'Your app runs the same everywhere — laptop, server, cloud',
      'Lightweight compared to full virtual machines',
      'Easy to share: just share your container image',
      'Isolates apps so they don\'t interfere with each other',
      'Speeds up deployment from hours to seconds',
    ],
    analogy: '🚢 Docker is like a shipping container. Before shipping containers, loading ships was chaotic. Now every shipping container is the same size — it fits on any ship, train, or truck. Docker does the same for software!',
  },
  prerequisites: [
    '64-bit operating system (Windows 10+, macOS 10.15+, or Linux)',
    'At least 4GB RAM (8GB recommended)',
    'Basic understanding of the terminal/command line',
    'No prior Docker knowledge required!',
  ],
  installation: {
    windows: [
      { step: 1, title: 'Download Docker Desktop', cmd: '# Visit: https://docs.docker.com/desktop/install/windows/', desc: 'Click "Download for Windows" on the Docker website.' },
      { step: 2, title: 'Run the installer', cmd: '# Double-click Docker Desktop Installer.exe', desc: 'Follow the installation wizard. Make sure "Use WSL 2" is checked.' },
      { step: 3, title: 'Start Docker Desktop', cmd: '# Search for "Docker Desktop" in Start Menu and open it', desc: 'Wait for the whale icon 🐳 to appear in the taskbar system tray.' },
      { step: 4, title: 'Verify installation', cmd: 'docker --version\ndocker run hello-world', desc: 'If you see "Hello from Docker!", you\'re all set!' },
    ],
    linux: [
      { step: 1, title: 'Update packages', cmd: 'sudo apt-get update\nsudo apt-get install ca-certificates curl gnupg', desc: 'Always update before installing new software.' },
      { step: 2, title: 'Add Docker\'s GPG key', cmd: 'sudo install -m 0755 -d /etc/apt/keyrings\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg\nsudo chmod a+r /etc/apt/keyrings/docker.gpg', desc: 'This ensures you download authentic Docker software.' },
      { step: 3, title: 'Add Docker repository', cmd: 'echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null', desc: 'Adds Docker\'s official software source.' },
      { step: 4, title: 'Install Docker', cmd: 'sudo apt-get update\nsudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin', desc: 'Installs Docker Engine and all tools.' },
      { step: 5, title: 'Run without sudo (optional)', cmd: 'sudo usermod -aG docker $USER\nnewgrp docker', desc: 'Allows running docker commands without sudo.' },
      { step: 6, title: 'Verify', cmd: 'docker --version\ndocker run hello-world', desc: 'Confirm Docker is working.' },
    ],
    mac: [
      { step: 1, title: 'Download Docker Desktop for Mac', cmd: '# Visit: https://docs.docker.com/desktop/install/mac-install/', desc: 'Choose Apple Silicon or Intel chip based on your Mac.' },
      { step: 2, title: 'Open the .dmg file', cmd: '# Drag Docker.app to Applications folder', desc: 'Just like installing any Mac app.' },
      { step: 3, title: 'Launch Docker', cmd: '# Open Docker from Applications', desc: 'Grant permissions when prompted.' },
      { step: 4, title: 'Verify', cmd: 'docker --version\ndocker run hello-world', desc: 'You should see the Docker version and hello-world message.' },
    ],
  },
  firstProject: {
    title: 'Dockerize Your First Node.js App',
    steps: [
      {
        title: 'Create project folder',
        cmd: 'mkdir my-docker-app\ncd my-docker-app',
        desc: 'Creates a new directory and navigates into it.',
      },
      {
        title: 'Create app.js',
        cmd: `// app.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Docker! 🐳\\n');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
        desc: 'A simple Node.js web server.',
      },
      {
        title: 'Create Dockerfile',
        cmd: `# Use official Node.js image as base
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy our app file
COPY app.js .

# Tell Docker which port our app uses
EXPOSE 3000

# Command to run when container starts
CMD ["node", "app.js"]`,
        desc: 'The Dockerfile is a recipe that tells Docker how to build your image.',
      },
      {
        title: 'Build the image',
        cmd: 'docker build -t my-first-app .',
        desc: 'This reads your Dockerfile and creates an image named "my-first-app".',
      },
      {
        title: 'Run the container',
        cmd: 'docker run -p 3000:3000 my-first-app',
        desc: 'Starts your container. Visit http://localhost:3000 to see your app!',
      },
    ],
    folderStructure: `my-docker-app/
├── app.js          # Your Node.js application
└── Dockerfile      # Recipe to build your container`,
  },
  commands: [
    { cmd: 'docker pull nginx', desc: 'Download the nginx image from Docker Hub' },
    { cmd: 'docker images', desc: 'List all images on your system' },
    { cmd: 'docker ps', desc: 'Show running containers' },
    { cmd: 'docker ps -a', desc: 'Show ALL containers (including stopped)' },
    { cmd: 'docker run -d -p 80:80 nginx', desc: 'Run nginx in background, map port 80' },
    { cmd: 'docker stop <container-id>', desc: 'Stop a running container' },
    { cmd: 'docker rm <container-id>', desc: 'Remove a stopped container' },
    { cmd: 'docker rmi <image-name>', desc: 'Remove an image' },
    { cmd: 'docker logs <container-id>', desc: 'View container logs' },
    { cmd: 'docker exec -it <id> /bin/sh', desc: 'Open a shell inside a running container' },
    { cmd: 'docker build -t myapp:v1 .', desc: 'Build image from current directory Dockerfile' },
    { cmd: 'docker-compose up -d', desc: 'Start all services defined in docker-compose.yml' },
    { cmd: 'docker-compose down', desc: 'Stop and remove all compose services' },
    { cmd: 'docker volume ls', desc: 'List all volumes' },
    { cmd: 'docker network ls', desc: 'List all networks' },
    { cmd: 'docker system prune -a', desc: 'Remove ALL unused images, containers, volumes' },
  ],
  roadmap: {
    beginner: ['What is a container?', 'Install Docker', 'docker run hello-world', 'Pull images from Docker Hub', 'Run nginx & explore browser', 'Basic docker commands (ps, stop, rm)'],
    intermediate: ['Write your first Dockerfile', 'Build custom images', 'Understand layers & caching', 'Docker Volumes (persistent data)', 'Docker Networks', 'Docker Compose for multi-container apps'],
    advanced: ['Multi-stage builds', 'Docker Swarm basics', 'Pushing to Docker Hub / ECR', 'Security scanning with Trivy', 'Optimizing image sizes', 'Docker in CI/CD pipelines'],
  },
  faq: [
    { q: 'What is the difference between a container and a VM?', a: 'A VM virtualizes an entire computer including the OS kernel. A container shares the host OS kernel and only isolates the application layer. Containers are much lighter, faster to start, and use less memory.' },
    { q: 'Is Docker free?', a: 'Docker Engine (CLI) is free and open source. Docker Desktop is free for personal use, students, and small businesses. Larger companies need a paid subscription.' },
    { q: 'Can I run Docker on Windows?', a: 'Yes! Docker Desktop for Windows uses WSL 2 (Windows Subsystem for Linux) to run Linux containers natively on Windows.' },
    { q: 'What is Docker Hub?', a: 'Docker Hub is like GitHub but for Docker images. It\'s a registry where you can find 100,000+ pre-built images for databases, web servers, programming languages, and more.' },
    { q: 'What is the difference between CMD and ENTRYPOINT in Dockerfile?', a: 'CMD sets the default command to run. It can be overridden when running the container. ENTRYPOINT sets the main command that always runs. Think of ENTRYPOINT as the executable and CMD as default arguments.' },
  ],
  interview: [
    { q: 'What is Docker and why is it used?', a: 'Docker is a containerization platform that packages applications and their dependencies together. It solves the "works on my machine" problem by ensuring consistent environments across development, testing, and production.' },
    { q: 'Explain the Docker architecture.', a: 'Docker uses a client-server architecture. The Docker client communicates with the Docker daemon (server) via REST API. The daemon manages images, containers, networks, and volumes. Docker Hub is the default registry for images.' },
    { q: 'What is a Dockerfile?', a: 'A Dockerfile is a text file containing a series of instructions to build a Docker image. Each instruction creates a new layer in the image.' },
    { q: 'What are Docker layers?', a: 'Docker images consist of read-only layers. Each instruction in a Dockerfile creates one layer. Layers are cached, so only changed layers are rebuilt, making builds faster.' },
    { q: 'What is Docker Compose?', a: 'Docker Compose is a tool for defining and running multi-container applications using a YAML file (docker-compose.yml). It lets you start all services with a single command: docker-compose up.' },
  ],
  bestPractices: [
    'Use official base images from Docker Hub when possible',
    'Use specific image tags (e.g., node:18-alpine) instead of "latest"',
    'Keep images small — use Alpine-based images',
    'Use multi-stage builds to reduce final image size',
    'Never store secrets in Dockerfiles or images',
    'Use .dockerignore to exclude unnecessary files',
    'Run containers as non-root users for security',
    'One process per container — don\'t run multiple services in one container',
    'Use health checks to monitor container status',
    'Scan images for vulnerabilities before deploying',
  ],
  commonMistakes: [
    'Using "latest" tag — images can change unexpectedly',
    'Running as root inside containers — security risk',
    'Storing secrets in environment variables in Dockerfile',
    'Not using .dockerignore — builds become slow and images bloated',
    'Too many RUN commands — creates unnecessary layers',
    'Not cleaning up stopped containers and unused images',
  ],
};

export const kubernetesContent = {
  intro: {
    what: `Kubernetes (also called K8s — because there are 8 letters between K and s) is a system that automatically manages your Docker containers. Imagine you have 100 containers running your app. How do you make sure they all stay running? What if one crashes? How do you update them all? Kubernetes handles all of this automatically!

It was originally created by Google (who used to call it Borg internally) and is now open-source and maintained by the Cloud Native Computing Foundation (CNCF).`,
    why: [
      'Automatically restarts crashed containers',
      'Scales your app up or down based on traffic',
      'Distributes traffic across healthy containers',
      'Rolls out updates without downtime',
      'Manages configuration and secrets',
    ],
    analogy: '🍽️ Think of Kubernetes as the manager of a restaurant. The chef (your app) just cooks. The manager makes sure there are enough chefs, replaces sick ones, takes orders from customers, and makes sure everything runs smoothly!',
  },
  prerequisites: [
    'Understanding of Docker and containers',
    'Basic command-line knowledge',
    'kubectl CLI installed',
    'A Kubernetes cluster (Minikube for local learning, or EKS/GKE for cloud)',
  ],
  installation: {
    windows: [
      { step: 1, title: 'Install kubectl', cmd: 'winget install -e --id Kubernetes.kubectl', desc: 'kubectl is the command-line tool to talk to Kubernetes.' },
      { step: 2, title: 'Install Minikube', cmd: 'winget install -e --id Kubernetes.minikube', desc: 'Minikube runs a single-node Kubernetes cluster on your machine.' },
      { step: 3, title: 'Start Minikube', cmd: 'minikube start', desc: 'This downloads and starts a local Kubernetes cluster. Takes a few minutes.' },
      { step: 4, title: 'Verify', cmd: 'kubectl get nodes\nkubectl cluster-info', desc: 'You should see one node in "Ready" status.' },
    ],
    linux: [
      { step: 1, title: 'Install kubectl', cmd: 'curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"\nchmod +x kubectl\nsudo mv kubectl /usr/local/bin/', desc: 'Downloads and installs the kubectl binary.' },
      { step: 2, title: 'Install Minikube', cmd: 'curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64\nsudo install minikube-linux-amd64 /usr/local/bin/minikube', desc: 'Installs Minikube for local development.' },
      { step: 3, title: 'Start cluster', cmd: 'minikube start --driver=docker', desc: 'Starts a local Kubernetes cluster using Docker as the driver.' },
      { step: 4, title: 'Verify', cmd: 'kubectl get nodes\nminikube status', desc: 'Confirms your cluster is running.' },
    ],
    mac: [
      { step: 1, title: 'Install with Homebrew', cmd: 'brew install kubectl\nbrew install minikube', desc: 'Install both tools using Homebrew.' },
      { step: 2, title: 'Start Minikube', cmd: 'minikube start', desc: 'Starts your local Kubernetes cluster.' },
      { step: 3, title: 'Verify', cmd: 'kubectl get nodes', desc: 'Should show one node.' },
    ],
  },
  firstProject: {
    title: 'Deploy Your First App to Kubernetes',
    steps: [
      { title: 'Create a deployment file (deployment.yaml)', cmd: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
  labels:
    app: my-app
spec:
  replicas: 3          # Run 3 copies of our app
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: nginx:1.25   # Use nginx web server
        ports:
        - containerPort: 80`, desc: 'This YAML file tells Kubernetes what to deploy.' },
      { title: 'Create a service file (service.yaml)', cmd: `apiVersion: v1
kind: Service
metadata:
  name: my-app-service
spec:
  selector:
    app: my-app
  ports:
  - port: 80
    targetPort: 80
  type: NodePort`, desc: 'A Service exposes your pods to the network.' },
      { title: 'Apply the files', cmd: 'kubectl apply -f deployment.yaml\nkubectl apply -f service.yaml', desc: 'Tells Kubernetes to create these resources.' },
      { title: 'Check the deployment', cmd: 'kubectl get pods\nkubectl get deployments\nkubectl get services', desc: 'Verify everything is running.' },
      { title: 'Access your app', cmd: 'minikube service my-app-service', desc: 'Opens the app in your browser!' },
    ],
    folderStructure: `k8s-app/
├── deployment.yaml    # Defines pods and replicas
├── service.yaml       # Exposes pods to network
└── configmap.yaml     # Configuration data (optional)`,
  },
  commands: [
    { cmd: 'kubectl get pods', desc: 'List all pods in current namespace' },
    { cmd: 'kubectl get pods -A', desc: 'List pods in ALL namespaces' },
    { cmd: 'kubectl describe pod <name>', desc: 'Show detailed info about a pod' },
    { cmd: 'kubectl logs <pod-name>', desc: 'View logs from a pod' },
    { cmd: 'kubectl logs -f <pod-name>', desc: 'Follow/stream pod logs in real-time' },
    { cmd: 'kubectl apply -f file.yaml', desc: 'Create or update resources from file' },
    { cmd: 'kubectl delete -f file.yaml', desc: 'Delete resources defined in file' },
    { cmd: 'kubectl scale deploy/myapp --replicas=5', desc: 'Scale deployment to 5 replicas' },
    { cmd: 'kubectl rollout status deploy/myapp', desc: 'Check rollout progress' },
    { cmd: 'kubectl rollout undo deploy/myapp', desc: 'Roll back to previous version' },
    { cmd: 'kubectl exec -it <pod> -- /bin/sh', desc: 'Open shell inside a pod' },
    { cmd: 'kubectl port-forward pod/<name> 8080:80', desc: 'Forward local port to pod' },
    { cmd: 'kubectl get events', desc: 'View cluster events (great for debugging)' },
    { cmd: 'kubectl top pods', desc: 'Show CPU/memory usage of pods' },
  ],
  roadmap: {
    beginner: ['Understand Pods, Nodes, Clusters', 'Install Minikube', 'Deploy first app', 'Understand Deployments vs Pods', 'Services (ClusterIP, NodePort, LoadBalancer)', 'Basic kubectl commands'],
    intermediate: ['ConfigMaps and Secrets', 'Persistent Volumes', 'Namespaces', 'Resource limits & requests', 'Health checks (liveness/readiness)', 'Ingress Controllers'],
    advanced: ['Helm charts', 'RBAC (Role-Based Access Control)', 'Network Policies', 'Horizontal Pod Autoscaler', 'StatefulSets for databases', 'Custom Resource Definitions (CRDs)'],
  },
  faq: [
    { q: 'What is the difference between a Pod and a Container?', a: 'A Pod is the smallest unit in Kubernetes. A Pod can contain one or more containers that share the same network and storage. Usually one container per pod is the best practice.' },
    { q: 'What is a Node?', a: 'A Node is a physical or virtual machine in your Kubernetes cluster. It runs the pods assigned to it by the control plane.' },
    { q: 'What is a Namespace?', a: 'Namespaces are virtual clusters within a Kubernetes cluster. Use them to separate environments (dev, staging, prod) or teams within the same cluster.' },
    { q: 'How is Kubernetes different from Docker Compose?', a: 'Docker Compose runs multiple containers on a single machine. Kubernetes runs containers across many machines, handles failures, auto-scales, and is designed for production at massive scale.' },
  ],
  interview: [
    { q: 'What are the main components of Kubernetes architecture?', a: 'Control Plane: API Server, etcd (key-value store), Scheduler, Controller Manager. Worker Nodes: kubelet, kube-proxy, Container Runtime (Docker/containerd).' },
    { q: 'What is a ReplicaSet?', a: 'A ReplicaSet ensures a specified number of pod replicas are running at all times. If a pod dies, the ReplicaSet creates a new one. Deployments manage ReplicaSets.' },
    { q: 'Explain the difference between ClusterIP, NodePort, and LoadBalancer services.', a: 'ClusterIP: internal only, accessible within cluster. NodePort: accessible from outside via node IP and port. LoadBalancer: creates an external cloud load balancer (requires cloud provider).' },
  ],
  bestPractices: [
    'Always set resource requests and limits for containers',
    'Use namespaces to organize workloads',
    'Never run pods as root',
    'Use readiness and liveness probes for all services',
    'Store secrets in Kubernetes Secrets, not ConfigMaps',
    'Use Helm for managing complex deployments',
    'Implement network policies to restrict pod communication',
    'Always use rolling update strategy for zero-downtime deploys',
  ],
  commonMistakes: [
    'Not setting resource limits — pods can consume all node resources',
    'Using kubectl apply in production without proper review',
    'Storing sensitive data in ConfigMaps instead of Secrets',
    'Not implementing health checks — broken pods receive traffic',
    'Ignoring RBAC — giving too many permissions by default',
  ],
};

export const awsContent = {
  intro: {
    what: `Amazon Web Services (AWS) is the world's most comprehensive and widely adopted cloud platform. Instead of buying and maintaining physical servers, AWS lets you rent computing power, storage, databases, and hundreds of other services over the internet — paying only for what you use.

Launched in 2006, AWS powers companies from tiny startups to Netflix, Airbnb, NASA, and even the CIA.`,
    why: [
      'No upfront hardware costs — pay as you go',
      'Scale from 1 to millions of users instantly',
      '200+ services covering everything from compute to AI/ML',
      'Global infrastructure in 30+ regions worldwide',
      'Industry-standard skills every DevOps engineer must know',
    ],
    analogy: '💡 AWS is like renting electricity instead of buying your own power plant. Why build and maintain a power plant when you can just plug in and pay for the electricity you use?',
  },
  prerequisites: [
    'Create a free AWS account at aws.amazon.com',
    'Credit card for account verification (free tier available)',
    'Basic understanding of web servers and networking',
    'AWS CLI installed on your machine',
  ],
  installation: {
    windows: [
      { step: 1, title: 'Install AWS CLI', cmd: '# Download from: https://awscli.amazonaws.com/AWSCLIV2.msi\n# Run the MSI installer', desc: 'AWS CLI lets you manage AWS from your terminal.' },
      { step: 2, title: 'Configure credentials', cmd: 'aws configure', desc: 'You\'ll be prompted for: Access Key ID, Secret Access Key, Region (e.g., us-east-1), Output format (json).' },
      { step: 3, title: 'Verify', cmd: 'aws --version\naws sts get-caller-identity', desc: 'Should show your AWS account info.' },
    ],
    linux: [
      { step: 1, title: 'Download and install', cmd: 'curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"\nunzip awscliv2.zip\nsudo ./aws/install', desc: 'Downloads and installs the latest AWS CLI.' },
      { step: 2, title: 'Configure', cmd: 'aws configure', desc: 'Enter your IAM user credentials.' },
      { step: 3, title: 'Verify', cmd: 'aws --version\naws s3 ls', desc: 'Lists your S3 buckets (empty if new account).' },
    ],
    mac: [
      { step: 1, title: 'Install via Homebrew', cmd: 'brew install awscli', desc: 'Easy one-line installation.' },
      { step: 2, title: 'Configure', cmd: 'aws configure', desc: 'Set up your AWS credentials.' },
      { step: 3, title: 'Verify', cmd: 'aws --version', desc: 'Confirm installation.' },
    ],
  },
  firstProject: {
    title: 'Host a Static Website on S3',
    steps: [
      { title: 'Create an S3 bucket', cmd: 'aws s3 mb s3://my-first-website-12345 --region us-east-1', desc: 'Creates a new S3 bucket (name must be globally unique).' },
      { title: 'Enable static website hosting', cmd: 'aws s3 website s3://my-first-website-12345 --index-document index.html --error-document error.html', desc: 'Enables S3 to serve web pages.' },
      { title: 'Create index.html', cmd: `<!DOCTYPE html>
<html>
  <body>
    <h1>My First AWS Website! 🚀</h1>
    <p>Hosted on Amazon S3!</p>
  </body>
</html>`, desc: 'A simple HTML file to upload.' },
      { title: 'Upload files', cmd: 'aws s3 sync . s3://my-first-website-12345 --acl public-read', desc: 'Uploads all files to S3 with public access.' },
      { title: 'Access your website', cmd: '# URL format:\n# http://my-first-website-12345.s3-website-us-east-1.amazonaws.com', desc: 'Visit this URL to see your live website!' },
    ],
    folderStructure: `website/
├── index.html      # Home page
├── error.html      # Error page (404)
└── style.css       # Styles (optional)`,
  },
  commands: [
    { cmd: 'aws s3 ls', desc: 'List all S3 buckets' },
    { cmd: 'aws s3 cp file.txt s3://bucket/', desc: 'Upload a file to S3' },
    { cmd: 'aws s3 sync ./dist s3://bucket/', desc: 'Sync local folder to S3' },
    { cmd: 'aws ec2 describe-instances', desc: 'List all EC2 instances' },
    { cmd: 'aws ec2 start-instances --instance-ids i-1234567890', desc: 'Start an EC2 instance' },
    { cmd: 'aws ec2 stop-instances --instance-ids i-1234567890', desc: 'Stop an EC2 instance' },
    { cmd: 'aws iam list-users', desc: 'List all IAM users' },
    { cmd: 'aws cloudformation deploy --template-file stack.yaml --stack-name my-stack', desc: 'Deploy a CloudFormation stack' },
    { cmd: 'aws logs tail /aws/lambda/my-function --follow', desc: 'Stream Lambda function logs' },
  ],
  roadmap: {
    beginner: ['Create AWS account', 'Understand IAM (users, groups, roles, policies)', 'Launch first EC2 instance', 'Create S3 bucket and upload files', 'Understand VPC basics', 'Use AWS Console (web UI)'],
    intermediate: ['Auto Scaling Groups', 'Load Balancers (ALB/NLB)', 'RDS databases', 'CloudFront CDN', 'Route 53 DNS', 'AWS Lambda (serverless)'],
    advanced: ['EKS (Kubernetes on AWS)', 'AWS CDK / CloudFormation', 'Cost optimization strategies', 'Multi-account architecture', 'Security hardening', 'AWS certifications (Solutions Architect)'],
  },
  faq: [
    { q: 'Is AWS free?', a: 'AWS offers a Free Tier for 12 months. Many services like EC2 t2.micro, S3 (5GB), and Lambda (1M requests/month) are free within limits. After the free tier, you pay for what you use.' },
    { q: 'What is IAM?', a: 'IAM (Identity and Access Management) is AWS\'s security system. It controls who can access AWS services and what they can do. Always create IAM users — never use the root account!' },
    { q: 'What is the difference between EC2 and Lambda?', a: 'EC2 is a virtual server you manage — you decide the OS, install software, and keep it running. Lambda is serverless — you just upload code and AWS runs it when triggered, charging only for execution time.' },
  ],
  interview: [
    { q: 'What are the main AWS service categories?', a: 'Compute (EC2, Lambda, ECS), Storage (S3, EBS, EFS), Database (RDS, DynamoDB, ElastiCache), Networking (VPC, Route 53, CloudFront), Security (IAM, KMS, Shield), Monitoring (CloudWatch, CloudTrail).' },
    { q: 'Explain the difference between Security Groups and NACLs.', a: 'Security Groups are stateful firewalls at the instance level — they remember connections. NACLs (Network ACLs) are stateless firewalls at the subnet level — every request needs explicit allow rules for both in and out.' },
  ],
  bestPractices: [
    'Never use root account for daily tasks — create IAM users',
    'Enable MFA on all accounts',
    'Follow the principle of least privilege for IAM',
    'Enable CloudTrail for auditing all API calls',
    'Use S3 versioning for important data',
    'Set up billing alerts to avoid surprise charges',
    'Tag all resources for cost management',
    'Use multiple Availability Zones for high availability',
  ],
  commonMistakes: [
    'Using root account instead of IAM users',
    'Making S3 buckets public accidentally — data exposure!',
    'Leaving EC2 instances running when not needed — costs money',
    'Not setting budget alerts — surprise bills',
    'Hardcoding AWS credentials in code — security risk',
  ],
};

export const terraformContent = {
  intro: {
    what: `Terraform is an Infrastructure as Code (IaC) tool created by HashiCorp. Instead of clicking through cloud dashboards to create servers and databases, you write code that describes your infrastructure — and Terraform creates it for you automatically.

Think of it like a blueprint 📐 for your entire cloud setup. If you need the same infrastructure again, just run the code. If you want to change it, update the code and apply.`,
    why: [
      'Infrastructure is version-controlled like application code',
      'Reproduce entire environments with one command',
      'Works with AWS, Azure, GCP, Kubernetes, and 1000+ providers',
      'Preview changes before applying them',
      'Destroy and recreate environments easily',
    ],
    analogy: '🏗️ Terraform is like LEGO instructions. The instructions (your .tf files) describe exactly how to build something. Give the same instructions to anyone and they\'ll build the exact same thing, every time!',
  },
  prerequisites: [
    'Terraform CLI installed',
    'AWS/Azure/GCP account with credentials configured',
    'Basic understanding of cloud concepts',
    'Code editor (VS Code with HashiCorp Terraform extension recommended)',
  ],
  installation: {
    windows: [
      { step: 1, title: 'Install via winget', cmd: 'winget install HashiCorp.Terraform', desc: 'Installs Terraform CLI via Windows Package Manager.' },
      { step: 2, title: 'Or download manually', cmd: '# Visit: https://developer.hashicorp.com/terraform/downloads\n# Download Windows zip, extract terraform.exe\n# Add to PATH', desc: 'Manual installation option.' },
      { step: 3, title: 'Verify', cmd: 'terraform --version', desc: 'Should display Terraform version number.' },
    ],
    linux: [
      { step: 1, title: 'Add HashiCorp repository', cmd: 'wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg\necho "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list', desc: 'Adds the official HashiCorp package repository.' },
      { step: 2, title: 'Install Terraform', cmd: 'sudo apt update && sudo apt install terraform', desc: 'Installs the latest stable Terraform.' },
      { step: 3, title: 'Verify', cmd: 'terraform --version', desc: 'Confirm installation.' },
    ],
    mac: [
      { step: 1, title: 'Install via Homebrew', cmd: 'brew tap hashicorp/tap\nbrew install hashicorp/tap/terraform', desc: 'Official Homebrew formula from HashiCorp.' },
      { step: 2, title: 'Verify', cmd: 'terraform --version', desc: 'Confirm installation.' },
    ],
  },
  firstProject: {
    title: 'Create an AWS EC2 Instance with Terraform',
    steps: [
      { title: 'Create main.tf', cmd: `# Configure the AWS provider
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

# Create an EC2 instance
resource "aws_instance" "my_server" {
  ami           = "ami-0c02fb55956c7d316"  # Amazon Linux 2
  instance_type = "t2.micro"              # Free tier eligible

  tags = {
    Name = "MyFirstServer"
    ManagedBy = "Terraform"
  }
}

# Output the public IP
output "server_ip" {
  value = aws_instance.my_server.public_ip
}`, desc: 'main.tf describes the infrastructure you want.' },
      { title: 'Initialize Terraform', cmd: 'terraform init', desc: 'Downloads the AWS provider plugin. Run this in the same folder as main.tf.' },
      { title: 'Preview changes', cmd: 'terraform plan', desc: 'Shows you exactly what Terraform will create/modify/destroy. Always review this!' },
      { title: 'Apply the configuration', cmd: 'terraform apply', desc: 'Type "yes" when prompted. Terraform creates the EC2 instance on AWS!' },
      { title: 'Destroy when done', cmd: 'terraform destroy', desc: 'Deletes all resources. Always destroy dev environments to save money!' },
    ],
    folderStructure: `terraform-project/
├── main.tf          # Main configuration
├── variables.tf     # Input variables
├── outputs.tf       # Output values
├── terraform.tfvars # Variable values
└── .terraform/      # Provider plugins (auto-generated)`,
  },
  commands: [
    { cmd: 'terraform init', desc: 'Initialize project and download providers' },
    { cmd: 'terraform validate', desc: 'Check configuration syntax' },
    { cmd: 'terraform fmt', desc: 'Format code according to style conventions' },
    { cmd: 'terraform plan', desc: 'Preview changes before applying' },
    { cmd: 'terraform plan -out=tfplan', desc: 'Save plan to file for later apply' },
    { cmd: 'terraform apply', desc: 'Apply changes to infrastructure' },
    { cmd: 'terraform apply tfplan', desc: 'Apply a saved plan file' },
    { cmd: 'terraform destroy', desc: 'Destroy all managed infrastructure' },
    { cmd: 'terraform state list', desc: 'List all resources in state' },
    { cmd: 'terraform state show aws_instance.my_server', desc: 'Show details of a specific resource' },
    { cmd: 'terraform import aws_instance.my_server i-1234567890', desc: 'Import existing resource into state' },
    { cmd: 'terraform workspace new staging', desc: 'Create a new workspace' },
    { cmd: 'terraform workspace list', desc: 'List all workspaces' },
  ],
  roadmap: {
    beginner: ['What is Infrastructure as Code?', 'Install Terraform', 'Understand HCL syntax', 'Write first .tf file', 'terraform init/plan/apply/destroy', 'Providers and Resources'],
    intermediate: ['Variables and outputs', 'Data sources', 'Modules (reusable code)', 'Remote state with S3 + DynamoDB', 'Workspaces', 'Terraform Cloud basics'],
    advanced: ['Complex module architecture', 'Terragrunt for DRY code', 'Policy as Code with Sentinel', 'Custom providers', 'Migrating existing infra to Terraform', 'CI/CD for Terraform'],
  },
  faq: [
    { q: 'What is Terraform state?', a: 'Terraform keeps a record of the infrastructure it manages in a "state file" (terraform.tfstate). This lets Terraform know what already exists and what needs to be created/modified/destroyed.' },
    { q: 'What is the difference between terraform plan and terraform apply?', a: 'terraform plan shows you a preview of changes without making them (like a dry run). terraform apply actually makes the changes. Always run plan before apply!' },
    { q: 'What is a Terraform module?', a: 'A module is a reusable package of Terraform code. Like a function in programming, you can call a module multiple times with different inputs. The Terraform Registry has thousands of pre-built modules.' },
  ],
  interview: [
    { q: 'What is the purpose of terraform.tfstate?', a: 'The state file maps your Terraform configuration to real-world resources. It tracks resource IDs, attributes, and dependencies. In teams, store state remotely (S3 + DynamoDB) to enable collaboration and locking.' },
    { q: 'How do you handle sensitive values in Terraform?', a: 'Use sensitive = true in variable and output declarations. Use environment variables or Vault for credentials. Never commit .tfvars files with secrets to version control.' },
  ],
  bestPractices: [
    'Always use remote state for team collaboration',
    'Use state locking (DynamoDB) to prevent concurrent runs',
    'Review terraform plan output carefully before applying',
    'Use modules to avoid code duplication',
    'Tag all resources for cost tracking',
    'Use workspaces or separate directories for different environments',
    'Pin provider versions to avoid unexpected upgrades',
    'Store Terraform code in version control (Git)',
  ],
  commonMistakes: [
    'Committing terraform.tfstate to Git — may contain secrets!',
    'Using terraform apply without terraform plan first',
    'Not using state locking in teams — concurrent runs corrupt state',
    'Hardcoding credentials in .tf files',
    'Not using modules — leads to massive, hard-to-maintain configs',
  ],
};

export const jenkinsContent = {
  intro: {
    what: `Jenkins is an open-source automation server that helps developers automate the process of building, testing, and deploying their software. It's the backbone of CI/CD (Continuous Integration / Continuous Deployment) pipelines.

Every time a developer pushes code to GitHub, Jenkins can automatically: pull the new code, run tests, build the application, and deploy it to production — all without human intervention!`,
    why: [
      'Automate repetitive tasks: build, test, deploy',
      'Catch bugs early with automated testing',
      'Deploy faster and more reliably',
      'Free and open source with 1800+ plugins',
      'Integrates with GitHub, Docker, AWS, Kubernetes',
    ],
    analogy: '🤖 Jenkins is like an assembly line robot in a car factory. When a new car design (code) arrives, the robot automatically assembles it, tests every component, and ships the finished car — 24/7 without taking breaks!',
  },
  prerequisites: [
    'Java 11 or 17 installed',
    'Basic understanding of Git and GitHub',
    'Knowledge of shell/bash commands',
    'Docker installed (for containerized Jenkins)',
  ],
  installation: {
    windows: [
      { step: 1, title: 'Download Jenkins WAR file', cmd: '# Visit: https://www.jenkins.io/download/\n# Download jenkins.war (LTS version)', desc: 'The WAR file runs on any system with Java.' },
      { step: 2, title: 'Run Jenkins', cmd: 'java -jar jenkins.war --httpPort=8080', desc: 'Starts Jenkins on port 8080. Copy the initial admin password from the console output.' },
      { step: 3, title: 'Setup wizard', cmd: '# Open: http://localhost:8080\n# Paste admin password\n# Install suggested plugins\n# Create admin user', desc: 'Complete the setup wizard in your browser.' },
    ],
    linux: [
      { step: 1, title: 'Install Java', cmd: 'sudo apt update\nsudo apt install fontconfig openjdk-17-jre', desc: 'Jenkins requires Java 17.' },
      { step: 2, title: 'Add Jenkins repository', cmd: 'sudo wget -O /usr/share/keyrings/jenkins-keyring.asc https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key\necho "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/" | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null', desc: 'Adds official Jenkins package repository.' },
      { step: 3, title: 'Install Jenkins', cmd: 'sudo apt-get update\nsudo apt-get install jenkins', desc: 'Installs and automatically starts Jenkins.' },
      { step: 4, title: 'Get initial admin password', cmd: 'sudo cat /var/lib/jenkins/secrets/initialAdminPassword', desc: 'Copy this password for browser setup.' },
      { step: 5, title: 'Open in browser', cmd: '# Visit: http://localhost:8080', desc: 'Complete the setup wizard.' },
    ],
    mac: [
      { step: 1, title: 'Install via Homebrew', cmd: 'brew install jenkins-lts', desc: 'Installs the Long-Term Support version.' },
      { step: 2, title: 'Start Jenkins', cmd: 'brew services start jenkins-lts', desc: 'Starts Jenkins as a background service.' },
      { step: 3, title: 'Access', cmd: '# Visit: http://localhost:8080', desc: 'Complete setup in browser.' },
    ],
  },
  firstProject: {
    title: 'Build a CI Pipeline for a Node.js App',
    steps: [
      { title: 'Create a Jenkinsfile in your project root', cmd: `pipeline {
    agent any  // Run on any available agent

    stages {
        stage('Checkout') {
            steps {
                // Pull code from GitHub
                git branch: 'main',
                    url: 'https://github.com/yourusername/your-repo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
            post {
                always {
                    junit 'test-results/**/*.xml'
                }
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            when {
                branch 'main'  // Only deploy from main branch
            }
            steps {
                sh './deploy.sh'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline succeeded!'
        }
        failure {
            echo '❌ Pipeline failed!'
            // emailext to: 'team@company.com', subject: 'Build Failed'
        }
    }
}`, desc: 'This Jenkinsfile defines your entire CI/CD pipeline as code.' },
      { title: 'Create a Jenkins job', cmd: '# In Jenkins UI:\n# New Item → Pipeline\n# Give it a name → OK\n# Pipeline Definition → "Pipeline script from SCM"\n# SCM → Git → Enter repo URL\n# Script Path → Jenkinsfile', desc: 'Connect Jenkins to your GitHub repository.' },
      { title: 'Trigger the first build', cmd: '# Click "Build Now" in Jenkins\n# Watch the pipeline stages run\n# Check console output for details', desc: 'Watch your pipeline run for the first time!' },
    ],
    folderStructure: `my-app/
├── src/              # Application source code
├── tests/            # Test files
├── Jenkinsfile       # Pipeline definition (CI/CD)
├── package.json
└── Dockerfile        # Optional: containerize the app`,
  },
  commands: [
    { cmd: '# In Jenkins UI: New Item → Freestyle or Pipeline', desc: 'Create a new Jenkins job' },
    { cmd: 'sudo systemctl start jenkins', desc: 'Start Jenkins service on Linux' },
    { cmd: 'sudo systemctl stop jenkins', desc: 'Stop Jenkins service' },
    { cmd: 'sudo systemctl status jenkins', desc: 'Check Jenkins service status' },
    { cmd: 'sudo cat /var/lib/jenkins/secrets/initialAdminPassword', desc: 'Get initial admin password' },
    { cmd: 'java -jar jenkins-cli.jar -s http://localhost:8080 list-jobs', desc: 'List all jobs via CLI' },
    { cmd: 'java -jar jenkins-cli.jar -s http://localhost:8080 build my-job', desc: 'Trigger a build via CLI' },
    { cmd: 'java -jar jenkins-cli.jar -s http://localhost:8080 console my-job', desc: 'Get build console output' },
  ],
  roadmap: {
    beginner: ['What is CI/CD?', 'Install Jenkins', 'Create Freestyle job', 'Connect to GitHub', 'Run first build', 'View build history'],
    intermediate: ['Declarative Pipeline syntax', 'Jenkinsfile in SCM', 'Build stages and steps', 'Environment variables', 'Credentials management', 'Build triggers (GitHub webhooks)'],
    advanced: ['Shared Libraries', 'Jenkins agents/nodes', 'Docker agents in pipeline', 'Blue Ocean UI', 'Multibranch pipelines', 'Jenkins as Code (JCasC)'],
  },
  faq: [
    { q: 'What is CI/CD?', a: 'CI (Continuous Integration) means automatically building and testing code every time it\'s committed. CD (Continuous Delivery/Deployment) means automatically deploying tested code to staging or production.' },
    { q: 'What is a Jenkinsfile?', a: 'A Jenkinsfile is a text file stored in your Git repository that defines your entire pipeline as code. Having it in Git means your pipeline is version-controlled, reviewable, and reproducible.' },
    { q: 'What are Jenkins plugins?', a: 'Plugins extend Jenkins functionality. There are 1800+ plugins for GitHub integration, Docker, Kubernetes, Slack notifications, test reporting, and almost anything you can imagine.' },
  ],
  interview: [
    { q: 'Explain the difference between Declarative and Scripted Pipelines.', a: 'Declarative Pipeline is the modern, structured syntax with a specific schema — easier to read and write. Scripted Pipeline is based on Groovy and more flexible but complex. For new projects, always use Declarative.' },
    { q: 'How do you secure Jenkins?', a: 'Enable authentication and authorization. Use credentials store for secrets (never put passwords in Jenkinsfile). Run Jenkins behind a reverse proxy. Keep Jenkins and plugins updated. Disable agents on master node.' },
  ],
  bestPractices: [
    'Store Jenkinsfile in your Git repository (Pipeline as Code)',
    'Use credentials store for secrets — never hardcode them',
    'Keep pipelines fast — slow pipelines block developers',
    'Use parallel stages to speed up builds',
    'Always clean workspace before builds',
    'Send notifications on failure (Slack, email)',
    'Use shared libraries for code reuse across pipelines',
    'Back up Jenkins configuration regularly',
  ],
  commonMistakes: [
    'Hardcoding credentials in Jenkinsfile — security risk!',
    'Running builds on the master node — use dedicated agents',
    'Not version-controlling Jenkinsfiles',
    'Creating too many plugins — increases maintenance burden',
    'Not cleaning up old builds — disk space exhaustion',
  ],
};

export const prometheusContent = {
  intro: {
    what: `Prometheus is an open-source monitoring and alerting system. It collects metrics (numbers that tell you about system health) from your applications and infrastructure, stores them, and lets you query and alert on them.

Prometheus is used by companies like DigitalOcean, SoundCloud (its creator!), and thousands of others. It works especially well with Kubernetes and Docker environments.`,
    why: [
      'Know about problems BEFORE users complain',
      'Understand system performance and capacity',
      'Powerful query language (PromQL) for analysis',
      'Beautiful dashboards with Grafana integration',
      'Automatic service discovery in Kubernetes',
    ],
    analogy: '🏥 Prometheus is like a hospital\'s health monitoring system for your servers. Just like nurses check patients\' vital signs (heart rate, blood pressure, temperature) and alert doctors when something is wrong, Prometheus checks your servers\' vital signs and alerts your team when something goes wrong.',
  },
  prerequisites: [
    'Basic understanding of Linux commands',
    'Running application to monitor (we\'ll use Node Exporter)',
    'Docker installed (easiest way to run Prometheus)',
    'Some familiarity with YAML configuration files',
  ],
  installation: {
    windows: [
      { step: 1, title: 'Run with Docker (easiest)', cmd: 'docker run -d -p 9090:9090 --name prometheus prom/prometheus', desc: 'Starts Prometheus on port 9090 — no configuration needed!' },
      { step: 2, title: 'Access UI', cmd: '# Visit: http://localhost:9090', desc: 'The Prometheus web interface is now accessible.' },
    ],
    linux: [
      { step: 1, title: 'Download Prometheus', cmd: 'wget https://github.com/prometheus/prometheus/releases/download/v2.51.0/prometheus-2.51.0.linux-amd64.tar.gz\ntar xvf prometheus-2.51.0.linux-amd64.tar.gz\ncd prometheus-2.51.0.linux-amd64/', desc: 'Downloads and extracts Prometheus.' },
      { step: 2, title: 'Run Prometheus', cmd: './prometheus --config.file=prometheus.yml', desc: 'Starts Prometheus with default config.' },
      { step: 3, title: 'Access UI', cmd: '# Visit: http://localhost:9090', desc: 'View the Prometheus dashboard.' },
    ],
    mac: [
      { step: 1, title: 'Install via Homebrew', cmd: 'brew install prometheus', desc: 'Installs Prometheus system-wide.' },
      { step: 2, title: 'Start service', cmd: 'brew services start prometheus', desc: 'Starts Prometheus as a background service.' },
      { step: 3, title: 'Access', cmd: '# Visit: http://localhost:9090', desc: 'View the UI.' },
    ],
  },
  firstProject: {
    title: 'Monitor a Node.js App with Prometheus + Grafana',
    steps: [
      { title: 'Create docker-compose.yml', cmd: `version: '3.8'
services:
  prometheus:
    image: prom/prometheus:latest
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml

  grafana:
    image: grafana/grafana:latest
    ports:
      - "3000:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin

  node-exporter:
    image: prom/node-exporter:latest
    ports:
      - "9100:9100"
    # Exports Linux system metrics (CPU, RAM, disk)`, desc: 'This runs Prometheus, Grafana, and Node Exporter together.' },
      { title: 'Create prometheus.yml', cmd: `global:
  scrape_interval: 15s    # Collect metrics every 15 seconds

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  - job_name: 'node-exporter'
    static_configs:
      - targets: ['node-exporter:9100']   # Linux system metrics`, desc: 'Tells Prometheus which targets to scrape.' },
      { title: 'Start everything', cmd: 'docker-compose up -d', desc: 'Starts all three services.' },
      { title: 'Explore Prometheus', cmd: '# Visit http://localhost:9090\n# Try this PromQL query:\nnode_cpu_seconds_total{mode="idle"}', desc: 'Query CPU metrics in the Prometheus UI.' },
      { title: 'Setup Grafana', cmd: '# Visit http://localhost:3000\n# Login: admin / admin\n# Add data source: Prometheus\n# URL: http://prometheus:9090\n# Import dashboard ID: 1860 (Node Exporter Full)', desc: 'Get beautiful dashboards instantly!' },
    ],
    folderStructure: `monitoring/
├── docker-compose.yml   # All services
├── prometheus.yml       # Prometheus scrape config
└── grafana/
    └── dashboards/      # Dashboard JSON files`,
  },
  commands: [
    { cmd: 'docker run -d -p 9090:9090 prom/prometheus', desc: 'Run Prometheus with default config' },
    { cmd: 'docker run -d -p 3000:3000 grafana/grafana', desc: 'Run Grafana dashboard server' },
    { cmd: 'docker run -d -p 9100:9100 prom/node-exporter', desc: 'Run Node Exporter for system metrics' },
    { cmd: 'curl http://localhost:9090/metrics', desc: 'View Prometheus own metrics' },
    { cmd: 'curl http://localhost:9100/metrics', desc: 'View Node Exporter metrics (hundreds of them!)' },
    { cmd: '# PromQL queries (run in Prometheus UI):', desc: '--- PromQL Examples ---' },
    { cmd: 'up', desc: 'Check which targets are UP (1) or DOWN (0)' },
    { cmd: 'rate(http_requests_total[5m])', desc: 'HTTP requests per second (5-min average)' },
    { cmd: '100 - (avg by (instance) (irate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)', desc: 'CPU usage percentage' },
    { cmd: 'node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes * 100', desc: 'Available memory percentage' },
    { cmd: 'node_disk_io_time_seconds_total', desc: 'Disk I/O time' },
  ],
  roadmap: {
    beginner: ['What are metrics?', 'Install Prometheus', 'Understand prometheus.yml', 'Run Node Exporter', 'Basic PromQL queries', 'View targets and alerts'],
    intermediate: ['PromQL operators (rate, sum, avg, histogram)', 'Alert rules with Alertmanager', 'Grafana integration', 'Recording rules for performance', 'Service discovery', 'Push Gateway for batch jobs'],
    advanced: ['Kubernetes monitoring with kube-state-metrics', 'Custom exporters', 'Remote storage (Thanos, Cortex)', 'High availability Prometheus', 'Prometheus federation', 'OpenTelemetry integration'],
  },
  faq: [
    { q: 'What is PromQL?', a: 'PromQL (Prometheus Query Language) is the language used to query Prometheus data. For example: rate(http_requests_total[5m]) gives you the per-second rate of HTTP requests over the last 5 minutes.' },
    { q: 'What is Grafana?', a: 'Grafana is a visualization tool that connects to Prometheus (and other data sources) to create beautiful dashboards with charts, graphs, and alerts. Prometheus stores the data; Grafana displays it.' },
    { q: 'What is an exporter?', a: 'An exporter is a program that translates metrics from a service into the Prometheus format. Node Exporter exports Linux system metrics. MySQL Exporter exports MySQL metrics. There are exporters for hundreds of technologies.' },
  ],
  interview: [
    { q: 'Explain the Prometheus data model.', a: 'Prometheus stores time series data identified by a metric name and key-value labels. Example: http_requests_total{method="GET", status="200"} = 1234. The timestamp and value together form a sample.' },
    { q: 'What is the difference between Gauge, Counter, and Histogram?', a: 'Counter: only goes up (total requests). Gauge: can go up or down (current connections, memory). Histogram: tracks distributions (request latencies). Summary: similar to histogram but calculates quantiles client-side.' },
  ],
  bestPractices: [
    'Use meaningful metric names following the convention: unit_name_total',
    'Add helpful labels but avoid high cardinality (millions of unique values)',
    'Set sensible scrape intervals (15s-60s for most use cases)',
    'Configure Alertmanager for routing alerts to right teams',
    'Store long-term data in remote storage (Thanos)',
    'Create runbooks for every alert',
    'Monitor Prometheus itself',
    'Use recording rules for expensive queries',
  ],
  commonMistakes: [
    'High cardinality labels (e.g., user_id as label) — causes memory explosion',
    'Not setting retention period — disk fills up',
    'Alerting on every spike — alert fatigue',
    'Not documenting what metrics mean',
    'Prometheus going down — not having HA setup for critical systems',
  ],
};

export const allContent = {
  docker: dockerContent,
  kubernetes: kubernetesContent,
  aws: awsContent,
  terraform: terraformContent,
  jenkins: jenkinsContent,
  prometheus: prometheusContent,
};

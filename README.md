# Coffee-page
# Step 1 :
I create simple static web-page using HTML , CSS and add some basic javaScript.
# Step 2 :
Than create "Docker file" for serve the statics files i'will use docker image "caddy".
# Step 3 :
Docker build and tag use this commands :
    docker build -t <image-name> <dir,.>
    docker tag <image-name> username/image-name:tag
# Step 4 :
Push on docker hub by using:
    docker login
    docker push username/image-name:tag
    // hum q use ktye ha llater
Verify within dockerhub
# Step 5 :
Create kind cluster and helm chart:
    kind create cluster --name <kind-cluster-name>
Verfiy
    kubectl cluster-info --context <kind-cluster-name>
Helm chart:
    helm create <name> 
in project directory
changes in values.yaml and other file if you need this changes
# Step  6 :
Deploy Helm Chart :
in project dir..
    helm install <release-name> ./<helm-chart-name>
for verify..
    kubectl get all
you see here changes that you will apply in values.yaml or other files..
# Step 7 :
Access website using Port-Forward
    kubectl port-forward service/service-name targetPort:port
in my case 
    kubectl port-forward service/my-sitr-service 3000:80
Now you see website on browser using ..
    localhost:tagetPort
    localhost:3000

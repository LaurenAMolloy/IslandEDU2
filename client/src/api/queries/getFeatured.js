export async function getFeatured(){
        const res = await fetch('http://localhost:8000/api/schools?limit=4');

        if(!res.ok) {
          throw new Error('Could not fetch schools');
        }

        const data = await res.json();

        console.log("React Loader Received Data", data)
        return data;
    }

'use strct';

app.factory('FlowerFactory', ($q, $http)=>{

  let getFlowers = ()=>{
    let flowers = [];
    return $q((resolve, reject)=>{
      $http.get('https://flower-power-angular.firebaseio.com/arrangements.json')
      .success((flowerData)=>{
        //Need to make this an array since the orderBy property on ng-repeat will not work with objects
        Object.keys(flowerData).forEach((key)=>{
          flowers.push(flowerData[key]);
        });
        resolve(flowers);
      })
      .error((error)=>{
        console.log("error", error);
        reject(error);
      });
    });
  }

  return {getFlowers}
})
Name=c('ravi','raju','ramu','seetha','geetha','rahul','kumar')

Age=c(23,22,25,26,32,28,25)

Designation=c("SDE-1","Manager","SDE-2","CEO","Team Leader","SDE-1","SDE-1")

UniqueDes = Designation[!duplicated(Designation)]

UniqueDes

Employees = data.frame(Name,Age,Designation)
                 
Employees

des = c()
no = c()

for(i in 1:length(UniqueDes)) { 
  for(j in 1:length(Designation)){
    if(UniqueDes[i]==Designation[j]){
      count = count+1
    }
  }
  des = append(des,UniqueDes[i])
  no = append(no,count)
  count = 0
}

des
no

countEmpolyees = data.frame("Designation"=UniqueDes,"Count"=no)
countEmpolyees






Name=c('ravi','raju','ramu','seetha','geetha')

Gender=c("M","M","M","F","F")

UniqueGen = Gender[!duplicated(Gender)]

UniqueGen

theDF = data.frame(Name,Gender)

theDF

no = c()

for(i in 1:length(UniqueGen)) { 
  for(j in 1:length(Gender)){
    if(UniqueGen[i]==Gender[j]){
      count = count+1
    }
  }
  no = append(no,count)
  count = 0
}

no

theDF2 = data.frame(UniqueGen,no)
theDF2






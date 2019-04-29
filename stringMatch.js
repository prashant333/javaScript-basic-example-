let s ='statement'
let t ='ee'
let match=''
let j =0
for (let i = 0; i < s.length; i++) {
    console.log('i=',i)
    for (j; j < t.length; j++) {
        console.log('j=',j)
        if (t[j]==s[i]) {
            j=j+1
            match+=s[i]
            console.log(match)
        }
        break
    }
}
console.log(j)
if (j==t.length) {
    console.log('match')
}
else console.log('not found')


function Contact(first_name,second_name,phone_number,email,adress)
{
	this.first_name=first_name;
	this.second_name=second_name;
	this.phone_number=phone_number;
	this.email=email;
	this.adress=["street","city","country"];
}
Contact.prototype.full_name = function() {
	return (this.first_name + " , " + this.second_name)
};
var martin= new Contact("martin","anderson","0704642705","kaweesimartinanderson@gmail.com",["makindye","kampala","uganda"])
console.log(martin.full_name)
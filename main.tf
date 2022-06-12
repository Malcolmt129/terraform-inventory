provider "aws" {
  region = "us-east-1"
  access_key = "AKIAQ67EBVF5Z4USCUNE"
  secret_key = "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"
}

resource "aws_instance" "backend" {
  ami = "ami-0c4f7023847b90238"
  instance_type = "t2.micro"

  tags = {
    "Name" = "Backend"
  }
}

resource "aws_s3_bucket" "frontend412" {
  bucket = "frontend412.s3-website-es-east-1.amazonaws.com"
  policy = file(policy.json)
}
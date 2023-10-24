import axios from "axios";
import {
  S3Client,
  ListObjectsCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export async function getListOfFiles() {
  const client = new S3Client({
    region: "us-east-2",
    credentials: {
      accessKeyId: "AKIAZD3TR6F3I3DQLQFJ",
      secretAccessKey: "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",
    },
  });
  //   const convert = require("xml-js");

  const params = {
    Bucket: "photography-web-app-bucket",
    Delimiter: "/",
    Prefix: "thumbnail/",
  };
  const command = new ListObjectsCommand(params);
  //   const command = new ListBucketsCommand({});
  try {
    const data = await client.send(command);
    console.log(data);
    return data.Contents.filter((item) => item.Key !== "thumbnail/");
  } catch (error) {
    console.log(error);
    return [];
  } finally {
    console.log("fml");
  }
}

export async function getFile(key) {
  const client = new S3Client({
    region: "us-east-2",
    credentials: {
      accessKeyId: "AKIAZD3TR6F3I3DQLQFJ",
      secretAccessKey: "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",
    },
  });
  //   const convert = require("xml-js");

  const params = {
    Bucket: "photography-web-app-bucket",
    Key: key,
  };
  const command = new GetObjectCommand(params);
  //   const command = new ListBucketsCommand({});
  try {
    // const data = await client.send(command);
    const url = await getSignedUrl(client, command, { expiresIn: 3600 });
    // console.log(url);
    return url;
  } catch (error) {
    console.log(error);
    return "";
  }
}

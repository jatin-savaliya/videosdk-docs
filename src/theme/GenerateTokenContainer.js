import React, { useEffect, useState } from "react";
import CodeBlock from "@theme/CodeBlock";

const generateCode = ({ language }) => {
  switch (language) {
    case "node":
      var code = "const jwt = require('jsonwebtoken');\n";
      code += "\n";
      code += "const API_KEY = <YOUR API KEY>;\n";
      code += "const SECRET = <YOUR SECRET>;\n";
      code += "\n";
      code +=
        "const options = { \n expiresIn: '120m', \n algorithm: 'HS256' \n};\n";
      code += "const payload = {\n";
      code += " apikey: API_KEY,\n";
      code += " permissions: [`allow_join`], // `ask_join` || `allow_mod` \n";
      code += " version: 2, //OPTIONAL\n";
      code += " roomId: `2kyv-gzay-64pg`, //OPTIONAL\n";
      code += " participantId: `lxvdplwt`, //OPTIONAL \n";
      code += " roles: ['crawler', 'rtc'], //OPTIONAL\n";
      code += "};\n";
      code += "\n";
      code += "const token = jwt.sign(payload, SECRET, options);\n";
      code += "console.log(token);";
      return code;
    case "php":
      var code = "use Firebase\\JWT\\JWT;\n";
      code += "\n";
      code += '$VIDEOSDK_API_KEY = "YOUR_API_KEY";\n';
      code += '$VIDEOSDK_SECRET_KEY = "YOUR_SECRET_KEY";\n';
      code += "\n";
      code += "$issuedAt = new DateTimeImmutable();\n";
      code += "$expire = $issuedAt->modify('+2 hours')->getTimestamp();\n";
      code += "\n";
      code += "$payload = (object)[];\n";
      code += "$payload->apikey = $VIDEOSDK_API_KEY;\n";
      code += "$payload->permissions = array(\n";
      code += '\t"allow_join"\n';
      code += "); // `ask_join` || `allow_mod` \n";
      code += "$payload->version = 2; //OPTIONAL\n";
      code += "$payload->roomId = `2kyv-gzay-64pg`; //OPTIONAL\n";
      code += "$payload->participantId = `lxvdplwt`; //OPTIONAL\n";
      code += "$payload->roles = array(\n";
      code += '\t"crawler",\n';
      code += '\t"rtc"\n';
      code += "); //OPTIONAL\n";
      code += "$payload->iat = $issuedAt->getTimestamp();\n";
      code += "$payload->exp = $expire;\n";
      code += "\n";
      code += "$jwt = JWT::encode($payload, $VIDEOSDK_SECRET_KEY, 'HS256');\n";
      return code;
    case "python":
      var code = "import jwt\n";
      code += "import datetime\n";
      code += "\n";
      code += 'VIDEOSDK_API_KEY = "YOUR_API_KEY"\n';
      code += 'VIDEOSDK_SECRET_KEY = "YOUR_SECRET_KEY"\n';
      code += "\n";
      code += "expiration_in_seconds = 7200\n";
      code +=
        "expiration = datetime.datetime.now() + datetime.timedelta(seconds=expiration_in_seconds)\n";
      code += "\n";
      code += "token = jwt.encode(payload={\n";
      code += "\t'exp': expiration,\n";
      code += "\t'apikey': VIDEOSDK_API_KEY,\n";
      code += "\t'permissions': ['allow_join'], # 'ask_join' || 'allow_mod' \n";
      code += "\t'version': 2, #OPTIONAL\n";
      code += "\t'roomId': `2kyv-gzay-64pg`, #OPTIONAL \n";
      code += "\t'participantId': `lxvdplwt`, #OPTIONAL\n";
      code += "\t'roles': ['crawler', 'rtc'], #OPTIONAL \n";
      code += "}, key=VIDEOSDK_SECRET_KEY, algorithm= 'HS256')\n";
      code += "print(token)\n";
      return code;
    case "dotnet":
      var code = "using JWT.Algorithms;\n";
      code += "using JWT.Builder;\n";
      code += "\n";
      code += 'string VIDEOSDK_API_KEY = "YOUR_API_KEY";\n';
      code += 'string VIDEOSDK_SECRET_KEY = "YOUR_SECRET_KEY";\n';
      code += "\n";
      code += "var token = JwtBuilder.Create()\n";
      code += "\t.WithAlgorithm(new HMACSHA256Algorithm()) // symmetric\n";
      code += "\t.WithSecret(VIDEOSDK_SECRET_KEY)\n";
      code +=
        '\t.AddClaim("exp", DateTimeOffset.UtcNow.AddHours(2).ToUnixTimeSeconds())\n';
      code += '\t.AddClaim("iat", DateTimeOffset.UtcNow.ToUnixTimeSeconds())\n';
      code += '\t.AddClaim("apikey", VIDEOSDK_API_KEY)\n';
      code +=
        '\t.AddClaim("permissions", new string[1] { "allow_join"}) // "ask_join" || "allow_mod" \n';
      code += '\t.AddClaim("version", 2) //OPTIONAL\n';
      code += '\t.AddClaim("roomId" , "2kyv-gzay-64pg") //OPTIONAL\n';
      code += '\t.AddClaim("participantId", "lxvdplwt"), //OPTIONAL\n';
      code +=
        '\t.AddClaim("roles", new string[2] { "crawler", "rtc" }) //OPTIONAL\n';
      code += "\t.Encode();\n";
      return code;
    case "go":
      var code = "package main\n";
      code += "import (\n";
      code += '\t"github.com/dgrijalva/jwt-go"\n';
      code += '\t"fmt"\n';
      code += '\t"time"\n';
      code += ")\n";
      code += "func main() {\n";
      code += '     var VIDEOSDK_API_KEY = "YOUR_API_KEY"\n';
      code += '     var VIDEOSDK_SECRET_KEY = "YOUR_SECRET_KEY"\n';
      code += "\n";
      code += "     var permissions [1]string\n";
      code +=
        '     permissions[0] = "allow_join"  // "ask_join" || "allow_mod" \n';
      code += "\n";
      code += "     var roles [2]string\n";
      code += '     roles[0] = "crawler"\n';
      code += '     roles[1] = "rtc"\n';
      code += "\n";
      code += "     atClaims := jwt.MapClaims{}\n";
      code += '     atClaims["apikey"] = VIDEOSDK_API_KEY\n';
      code += '     atClaims["permissions"] = permissions\n';
      code += '     atClaims["version"] = 2 //OPTIONAL\n';
      code += '     atClaims["roomId"] = "2kyv-gzay-64pg" //OPTIONAL \n';
      code += '     atClaims["participantId"] = "lxvdplwt" //OPTIONAL\n';
      code += '     atClaims["roles"] = roles //OPTIONAL\n';
      code += '     atClaims["iat"] = time.Now().Unix()\n';
      code +=
        '     atClaims["exp"] = time.Now().Add(time.Minute * 120).Unix()\n';
      code +=
        "     at := jwt.NewWithClaims(jwt.SigningMethodHS256, atClaims)\n";
      code += "\n";
      code +=
        "     token, err := at.SignedString([]byte(VIDEOSDK_SECRET_KEY))\n";
      code += "     if err != nil {\n";
      code += '         fmt.Printf("%v\\n", err)\n';
      code += "     }\n";
      code += "     var tokenString = token\n";
      code += "}";
      return code;
    case "java":
      var code = "import java.util.*;\n";
      code += "import io.jsonwebtoken.Jwts;\n";
      code += "import io.jsonwebtoken.SignatureAlgorithm;\n";
      code += "\n";
      code += "public class Main {\n";
      code += "    public static void main(String[] args) {\n";
      code += '        String VIDEOSDK_API_KEY = "YOUR_API_KEY";\n';
      code += '        String VIDEOSDK_SECRET_KEY = "YOUR_SECRET_KEY";\n';
      code += "\n";
      code += "        Map<String, Object> payload = new HashMap<>(); 	\n";
      code += '        payload.put("apikey", VIDEOSDK_API_KEY);\n';
      code +=
        '        payload.put("permissions", new String[]{"allow_join"}); // "ask_join" || "allow_mod"\n';
      code += '        payload.put("version", 2); //OPTIONAL\n';
      code += '        payload.put("roomId", "2kyv-gzay-64pg"); //OPTIONAL\n';
      code += '        payload.put("participantId", "lxvdplwt"); //OPTIONAL\n';
      code +=
        '        payload.put("roles", new String[]{"crawler", "rtc"}); //OPTIONAL\n';
      code += "\n";
      code += "        String token = Jwts.builder().setClaims(payload)\n";
      code +=
        "	                     .setExpiration(new Date(System.currentTimeMillis() + 7200 * 1000))\n";
      code +=
        "	                     .signWith(SignatureAlgorithm.HS256,VIDEOSDK_SECRET_KEY.getBytes()).compact();\n";
      code += "        System.out.println(token);\n";
      code += "      }   \n";
      code += "}\n";
      return code;
    case "ruby":
      var code = "require 'jwt'\n";
      code += "\n";
      code += '$VIDEOSDK_API_KEY = "YOUR_API_KEY"\n';
      code += '$VIDEOSDK_SECRET_KEY = "YOUR_SECRET_KEY"\n';
      code += "\n";
      code += "now = Time.now\n";
      code += "exp = now + 7200\n";
      code += "payload = {\n";
      code += "    apikey: $VIDEOSDK_API_KEY,\n";
      code += '    permissions: ["allow_join"], # "ask_join" || "allow_mod"\n';
      code += "    version: 2, # OPTIONAL\n";
      code += "    roomId: `2kyv-gzay-64pg`, # OPTIONAL\n";
      code += "    participantId: `lxvdplwt`, # OPTIONAL\n";
      code += '    roles: ["crawler", "rtc"], # OPTIONAL\n';
      code += "    iat: now.to_i,\n";
      code += "    exp: exp.to_i\n";
      code += "}\n";
      code += "\n";
      code += "token = JWT.encode(payload, $VIDEOSDK_SECRET_KEY, 'HS256')\n";
      return code;
    case "rust":
      var code =
        "use jsonwebtoken::{ encode,  EncodingKey, Header, Algorithm};\n";
      code += "\n";
      code += "#[derive(Debug, Serialize)]\n";
      code += "struct  Payload{\n";
      code += "    apikey:String,\n";
      code += "    permissions:[String;1],\n";
      code += "    version:i32, //OPTIONAL\n";
      code += "    roomId:String, //OPTIONAL\n";
      code += "    participantId:String, //OPTIONAL\n";
      code += "    roles:[String;2], //OPTIONAL\n";
      code += "}\n";
      code += "\n";
      code += 'let videosdk_api_key=String::from("");\n';
      code += 'let videosdk_secret_key=String::from("");\n';
      code += "\n";
      code += "let payload = Payload {\n";
      code += "    apikey : videosdk_api_key,\n";
      code +=
        '    permissions: [String::from("allow_join")], // String::from("ask_join") || String::from("allow_mod")\n';
      code += "    version : 2, //OPTIONAL\n";
      code += "    roomId :  `2kyv-gzay-64pg`, //OPTIONAL \n";
      code += "    participantId : `lxvdplwt`, //OPTIONAL\n";
      code +=
        '    roles: [String::from("crawler"),String::from("rtc")], //OPTIONAL\n';
      code += "};\n";
      code += "\n";
      code +=
        "let token = encode(&Header::new(Algorithm::HS256), &payload, &EncodingKey::from_secret(videosdk_secret_key.as_ref()))\n";
      code += '	    .map_err(|err| println!("{:?}", err)).ok();\n';
      return code;
  }
};

const MethodRequestResponse = () => {
  const languageList = [
    {
      id: "node",
      value: "NodeJS",
      code: "js",
    },
    {
      id: "php",
      value: "PHP",
      code: "js",
    },
    {
      id: "python",
      value: "Python",
      code: "python",
    },
    {
      id: "dotnet",
      value: ".NET",
      code: "js",
    },
    {
      id: "go",
      value: "Go",
      code: "go",
    },
    {
      id: "java",
      value: "Java",
      code: "java",
    },
    {
      id: "ruby",
      value: "Ruby",
      code: "js",
    },
    {
      id: "rust",
      value: "Rust",
      code: "go",
    },
  ];

  const [language, setLanguage] = useState(languageList[0]);

  useEffect(() => {}, [language]);

  return (
    <div>
      <div className="bg-[#333A47] rounded-t-lg pt-4 pb-4 pl-3 flex flex-row flex-wrap align-middle">
        <div className="text-[#72C894] text-sm font-bold"></div>
        <div className="font-bold text-white-1 text-sm pl-[3px] pr-[3px]">
          TOKEN GENERATION
        </div>
        <div className="flex-1 text-[#7D8EAD] text-sm font-medium"></div>
        <div className="dropdown dropdown--hoverable dropdown--right">
          <div className="flex flex-row pr-3 cursor-pointer">
            <div className="text-sm text-white-1">{language.value}</div>
            <img
              src="/img/icons/ic_arrow_down.svg"
              className="pl-2 colored_ic_arrow_down"
            />
          </div>
          <ul className="dropdown__menu min-w-fit bg-[#252a34]">
            {languageList.map((v) => {
              return (
                <li key={v.id}>
                  <a
                    className="dropdown__link text-sm cursor-pointer"
                    onClick={(e) => {
                      setLanguage(v);
                    }}
                  >
                    {v.value}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="method_code_block">
        <CodeBlock
          metastring={
            language.id == "node"
              ? "{3-4,7,11-16,19}"
              : language.id == "php"
              ? "{3-4,7,10-22,24,26}"
              : language.id == "python"
              ? "{4-5,7,11-18}"
              : language.id == "dotnet"
              ? "{4-5,8-17}"
              : language.id == "go"
              ? "{8-9,11-12,14-16,18-27,29}"
              : language.id == "java"
              ? "{7-8,11-16,19-20}"
              : language.id == "ruby"
              ? "{3-4,7,9-16,19}"
              : language.id == "rust"
              ? "{13-14,17-22,25}"
              : ""
          }
          language={language.code}
        >
          {generateCode({
            language: language.id,
          })}
        </CodeBlock>
      </div>
    </div>
  );
};

function GenerateTokenContainer() {
  return (
    <div id="tailwind">
      <div className="lg:w-10/11 w-full lg:pt-0 pt-4 lg:sticky self-start top-10">
        <MethodRequestResponse />
      </div>
    </div>
  );
}

export default GenerateTokenContainer;

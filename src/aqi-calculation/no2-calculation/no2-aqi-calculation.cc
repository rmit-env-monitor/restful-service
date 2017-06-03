#include <nan.h>

double calculate(double AQI_high, double AQI_low, double brpt_high, double brpt_low, double cctt) {
    double AQI_up = AQI_high - AQI_low;
    double brpt_down = brpt_high - brpt_low;
    double result = (AQI_up / brpt_down) * (cctt - brpt_low) + AQI_low;
    return (int)result;
}

void calculateNO2(const Nan::FunctionCallbackInfo<v8::Value>& info) {
    double cctt = info[0]->NumberValue();
    double AQI_high = 0;
    double AQI_low = 0;
    double brpt_high = 0;
    double brpt_low = 0;

    if (cctt >= 0 && cctt <= 53) {
        AQI_high = 50;
        AQI_low = 0;
        brpt_high = 53;
        brpt_low = 0;
    } else if (cctt >= 54 && cctt <= 100) {
        AQI_high = 100;
        AQI_low = 50;
        brpt_high = 100;
        brpt_low = 54;
    } else if (cctt >= 101 && cctt <= 360) {
        AQI_high = 150;
        AQI_low = 101;
        brpt_high = 360;
        brpt_low = 101;
    } else if (cctt >= 361 && cctt <= 649) {
        AQI_high = 200;
        AQI_low = 151;
        brpt_high = 649;
        brpt_low = 361;
    } else if (cctt >= 650 && cctt <= 1249) {
        AQI_high = 300;
        AQI_low = 201;
        brpt_high = 1249;
        brpt_low = 650;
    } else if (cctt >= 1250 && cctt <= 1649) {
        AQI_high = 400;
        AQI_low = 301;
        brpt_high = 1649;
        brpt_low = 1250;
    } else {
        AQI_high = 500;
        AQI_low = 401;
        brpt_high = 2049;
        brpt_low = 1650;
    }

    info.GetReturnValue().Set(calculate(AQI_high, AQI_low, brpt_high, brpt_low, cctt));
}

void Init(v8::Local<v8::Object> exports) {
    exports->Set(Nan::New("calculateNO2").ToLocalChecked(),
        Nan::New<v8::FunctionTemplate>(calculateNO2)->GetFunction());
}

NODE_MODULE(addon, Init)
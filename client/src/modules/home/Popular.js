import React from "react";
import * as m from "@mui/material";
export default function Popular() {
  return (
    <m.Box>
      <m.Typography variant="h5" fontWeight={"bold"} gutterBottom>
        Điểm đến đang thịnh hành
      </m.Typography>
      <m.Typography marginBottom={2}>
        Các lựa chọn phổ biến nhất cho du khách từ Việt Nam
      </m.Typography>
      <m.Grid container spacing={2}>
        <m.Grid item xs={6}>
          <div>
            <div style={{ height: 270 }}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
                alt=""
                src="https://images.unsplash.com/photo-1700495405574-dceab5cc64b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </m.Grid>
        <m.Grid item xs={6}>
          <div>
            <div style={{ height: 270 }}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
                alt=""
                src="https://images.unsplash.com/photo-1700495405574-dceab5cc64b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </m.Grid>
        <m.Grid item xs={4}>
          <div>
            <div style={{ height: 270 }}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
                alt=""
                src="https://images.unsplash.com/photo-1700495405574-dceab5cc64b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </m.Grid>
        <m.Grid item xs={4}>
          <div>
            <div style={{ height: 270 }}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
                alt=""
                src="https://images.unsplash.com/photo-1700495405574-dceab5cc64b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </m.Grid>
        <m.Grid item xs={4}>
          <div>
            <div style={{ height: 270 }}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
                alt=""
                src="https://images.unsplash.com/photo-1700495405574-dceab5cc64b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </m.Grid>
      </m.Grid>
    </m.Box>
  );
}
